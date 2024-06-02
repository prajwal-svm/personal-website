import React, { useEffect, useRef, useState } from 'react'
import {
  Box,
  Button,
  Input,
  Text,
  Textarea,
  useColorMode,
  useToast,
} from '@chakra-ui/react'
import StackWithTitleWrapper from './StackWithTitleWrapper'
import { primaryBackgroundColor } from "../styles/theme";

import emailjs from 'emailjs-com'
import { init } from '@emailjs/browser'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { CONTACT } from '../data/content'

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLTE_ID
const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID

init(userId)

const Contact = ({ id, sectionIndex, sectionTitle }) => {
  const { colorMode } = useColorMode()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setLoading] = useState(false)

  const [token, setToken] = useState(null)
  const captchaRef = useRef(null)

  const toast = useToast()

  const isValidEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }

  // Reference: https://docs.hcaptcha.com/configuration#jsapi
  const handleSubmit = () => {
    if (name && email && message) {
      if (!isValidEmail(email)) {
        toast({
          title: CONTACT.toast.invalidEmail,
          status: 'warning',
          isClosable: true,
          position: 'bottom-left'
        })
        return
      }
      captchaRef.current.execute()
    } else {
      toast({
        title: CONTACT.toast.fieldsRequired,
        status: 'warning',
        isClosable: true,
        position: 'bottom-left'
      })
      setLoading(false)
    }
  }

  const onExpire = () => {
    window.splitbee.track('hCaptcha', {
      type: 'hCaptcha Token Expired'
    })
  }

  const onClose = () => {
    window.splitbee.track('hCaptcha', {
      type: 'hCaptcha Closedd'
    })
  }

  const onChalExpire = () => {
    window.splitbee.track('hCaptcha', {
      type: 'hCaptcha Chal Token Expired'
    })
  }

  const onError = err => {
    window.splitbee.track('hCaptcha', {
      type: `hCaptcha Error: ${err}`
    })
  }

  useEffect(() => {
    if (token) {
      ; (async () => {
        // verify response token server side
        const response =
          (await fetch('/api/hCaptcha', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
          })) || {}

        const {
          success: isTokenVerified,
          message: errMsg = null
        } = await response.json()

        if (isTokenVerified) {
          const templateParams = {
            name,
            email,
            message,
            subject
          }

          setLoading(true)

          emailjs
            .send(serviceId, templateId, templateParams, userId)
            .then(response => {
              if (response && response.status === 200) {
                toast({
                  title: CONTACT.toast.success,
                  status: 'success',
                  isClosable: true,
                  position: 'bottom-left'
                })
              } else {
                toast({
                  title: CONTACT.toast.error,
                  status: 'error',
                  isClosable: true,
                  position: 'bottom-left'
                })
              }
              setLoading(false)
            })
            .catch(e => {
              toast({
                title: CONTACT.toast.generalError,
                status: 'error',
                isClosable: true,
                position: 'bottom-left'
              })
              setLoading(false)
            })

          setName('')
          setEmail('')
          setSubject('')
          setMessage('')
          if (isLoading) {
            setLoading(false)
          }
        } else {
          toast({
            title: CONTACT.toast.captchaError,
            status: 'error',
            isClosable: true,
            position: 'bottom-left'
          })
          window.splitbee.track('hCaptcha', {
            type: errMsg || CONTACT.toast.captchaError
          })
        }
        setToken(null)
      })()
    } else {
      return () => setToken(null)
    }
  }, [email, isLoading, message, name, subject, toast, token, setToken])

  return (
  <Box
  className="pattern"
  >
      <StackWithTitleWrapper
      id={id}
      sectionIndex={sectionIndex}
      sectionTitle={sectionTitle}
      bg={`radial-gradient(circle, ${primaryBackgroundColor}99 100%, transparent 100%)`}
    >
      <Text color={CONTACT.colorSwitch.text[colorMode]} fontSize='xl' mb={8}>
        {CONTACT.message}
      </Text>
      <Input
        _placeholder={CONTACT.colorSwitch.placeholderColor}
        value={name}
        borderColor={CONTACT.colorSwitch.fieldBorderColor[colorMode]}
        variant='outline'
        size='lg'
        type='text'
        placeholder='Your name'
        onChange={e => setName(e.target.value)}
      />
      <Input
        _placeholder={CONTACT.colorSwitch.placeholderColor}
        value={email}
        borderColor={CONTACT.colorSwitch.fieldBorderColor[colorMode]}
        variant='outline'
        size='lg'
        type='email'
        placeholder='Your email'
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        _placeholder={CONTACT.colorSwitch.placeholderColor}
        value={subject}
        borderColor={CONTACT.colorSwitch.fieldBorderColor[colorMode]}
        variant='outline'
        size='lg'
        type='text'
        placeholder='Subject'
        onChange={e => setSubject(e.target.value)}
      />
      <Textarea
        _placeholder={CONTACT.colorSwitch.placeholderColor}
        value={message}
        borderColor={CONTACT.colorSwitch.fieldBorderColor[colorMode]}
        variant='outline'
        size='lg'
        placeholder='Your Message'
        onChange={e => setMessage(e.target.value)}
      />
      <HCaptcha
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
        size='invisible'
        onVerify={setToken}
        onError={onError}
        onExpire={onExpire}
        onClose={onClose}
        onChalExpired={onChalExpire}
        ref={captchaRef}
      />
      <Button
        borderColor={CONTACT.colorSwitch.btnBorderColor[colorMode]}
        isLoading={isLoading}
        loadingText={CONTACT.btnLoadingText}
        size='lg'
        color={CONTACT.colorSwitch.btnColor[colorMode]}
        variant={CONTACT.colorSwitch.btnVariant[colorMode]}
        onClick={handleSubmit}
      >
        {CONTACT.btnText}
      </Button>
    </StackWithTitleWrapper>
  </Box>
  )
}

export default Contact
