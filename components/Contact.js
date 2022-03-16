import { Button, Input, Text, Textarea, useColorMode, useToast } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import StackWithTitleWrapper from './StackWithTitleWrapper'

import emailjs from 'emailjs-com'
import { init } from '@emailjs/browser';
import { primaryDarkColor } from '../styles/theme';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLTE_ID;
const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

init(userId);

const colorSecondary = {
    light: 'gray.600',
    dark: '#8892b0'
}

const Contact = ({ id, sectionIndex, sectionTitle }) => {
    const { colorMode } = useColorMode()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setLoading] = useState(false);

    const [token, setToken] = useState(null);
    const captchaRef = useRef(null);

    const toast = useToast()

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    // Reference: https://docs.hcaptcha.com/configuration#jsapi
    const handleSubmit = () => {

        if (name && email && message) {

            if (!isValidEmail(email)) {
                toast({
                    title: `Invalid Email!`,
                    status: 'warning',
                    isClosable: true,
                    position: 'bottom-left'
                })
                return
            }


            captchaRef.current.execute();

        } else {
            toast({
                title: `Name, Email & Message are mandatory fields!`,
                status: 'warning',
                isClosable: true,
                position: 'bottom-left'
            })
            setLoading(false)
        }

    }

    const onExpire = () => {
        window.splitbee.track("hCaptcha", {
            type: "hCaptcha Token Expired"
        })
    };

    const onClose = () => {
        window.splitbee.track("hCaptcha", {
            type: "hCaptcha Closedd"
        })
    };

    const onChalExpire = () => {
        window.splitbee.track("hCaptcha", {
            type: "hCaptcha Chal Token Expired"
        })
    };

    const onError = (err) => {
        window.splitbee.track("hCaptcha", {
            type: `hCaptcha Error: ${err}`
        })
    };

    useEffect(() => {
        if (token) {
            (async () => {

                // verify response token server side
                const response = await fetch('/api/hCaptcha', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ token }),
                }) || {};

                const { success: isTokenVerified, message: errMsg = null } = await response.json();

                if (isTokenVerified) {

                    const templateParams = {
                        name,
                        email,
                        message,
                        subject
                    };

                    setLoading(true)

                    emailjs.send(serviceId, templateId, templateParams, userId)
                        .then(response => {
                            if (response && response.status === 200) {
                                toast({
                                    title: `Awesome! I'll to get back to you as soon as possible`,
                                    status: 'success',
                                    isClosable: true,
                                    position: 'bottom-left'
                                })
                            } else {
                                toast({
                                    title: `Issue with email service!`,
                                    status: 'error',
                                    isClosable: true,
                                    position: 'bottom-left'
                                })
                            }
                            setLoading(false)
                        })
                        .catch(e => {
                            toast({
                                title: `Something went wrong!`,
                                status: 'error',
                                isClosable: true,
                                position: 'bottom-left'
                            })
                            setLoading(false)
                        });

                    setName('');
                    setEmail('');
                    setSubject('')
                    setMessage('');
                    if (isLoading) {
                        setLoading(false)
                    }


                } else {
                    toast({
                        title: `hCaptcha token verification failed!`,
                        status: 'error',
                        isClosable: true,
                        position: 'bottom-left'
                    })
                    window.splitbee.track("hCaptcha", {
                        type: errMsg || 'hCaptcha token verification failed'
                    })
                }
                setToken(null)

            })();
        } else {
            return () => setToken(null)
        }
    }, [email, isLoading, message, name, subject, toast, token, setToken]);

    return <StackWithTitleWrapper id={id} sectionIndex={sectionIndex} sectionTitle={sectionTitle}>
        <Text color={colorSecondary[colorMode]} fontSize='xl' mb={8}>
            Although I&lsquo;m not looking for any new opportunities at the moment,
            my inbox is always open. I&lsquo;d like to know who you are and how you ended up on this page! If you have a question or just want to say &quot;Hey&quot; use the below form, I&lsquo;ll try my best to get back to you!
        </Text>
        <Input
            _placeholder={{ color: colorMode === 'light' ? 'gray.500' : 'gray.500' }}
            value={name}
            borderColor={colorMode === 'light' ? 'lightgray' : '#233554'}
            variant="outline"
            size='lg'
            type='text'
            placeholder='Your name'
            onChange={e => setName(e.target.value)}
        />
        <Input
            _placeholder={{ color: colorMode === 'light' ? 'gray.500' : 'gray.500' }}
            value={email}
            borderColor={colorMode === 'light' ? 'lightgray' : '#233554'}
            variant="outline"
            size='lg'
            type='email'
            placeholder='Your email'
            onChange={e => setEmail(e.target.value)}
        />
        <Input
            _placeholder={{ color: colorMode === 'light' ? 'gray.500' : 'gray.500' }}
            value={subject}
            borderColor={colorMode === 'light' ? 'lightgray' : '#233554'}
            variant="outline"
            size='lg'
            type='text'
            placeholder='Subject'
            onChange={e => setSubject(e.target.value)}
        />
        <Textarea
            _placeholder={{ color: 'gray.500' }}
            value={message}
            borderColor={colorMode === 'light' ? 'lightgray' : '#233554'}
            variant="outline"
            size='lg'
            placeholder='Your Message'
            resize='none'
            onChange={e => setMessage(e.target.value)}
        />
        <HCaptcha
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
            size="invisible"
            onVerify={setToken}
            onError={onError}
            onExpire={onExpire}
            onClose={onClose}
            onChalExpired={onChalExpire}
            ref={captchaRef}
        />
        <Button
            borderColor={colorMode === 'light' ? 'purple.500' : 'initial'}
            isLoading={isLoading}
            loadingText='Sending...'
            size='lg'
            color={colorMode === 'light' ? 'gray.700' : primaryDarkColor}
            onClick={handleSubmit}
        >
            Send
        </Button>
    </StackWithTitleWrapper>
}

export default Contact