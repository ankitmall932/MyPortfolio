import { Instagram } from '@mui/icons-material';
import GitHub from '@mui/icons-material/GitHub';
import WhatsApp from '@mui/icons-material/WhatsApp';
import { ArrowUpRight, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const opportunities = [
    'Freelance projects',
    'Full-stack web apps',
    'Frontend development',
    'Creative collaborations'
];

const Contacts = () => {
    const form = useRef();
    const [ isSending, setIsSending ] = useState(false);
    const [ submitStatus, setSubmitStatus ] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();

        setIsSending(true);
        setSubmitStatus('');

        try {
            await emailjs.sendForm(
                'service_koyucwb',
                'template_jaeyyxl',
                form.current,
                '43qYR7Purru0o53B5'
            );
            form.current.reset();
            setSubmitStatus('Message sent successfully. Thanks for reaching out!');
        } catch (error) {
            console.error('Failed to send contact message:', error);
            setSubmitStatus('Your message could not be sent. Please try again or email me directly.');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className='section-wrap'>
            <header className='relative isolate mb-8 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#25281f] via-[#1c1b18] to-[#29201d] p-7 sm:p-10 lg:p-14'>
                <div className='absolute -right-20 -top-32 -z-10 h-80 w-80 rounded-full border border-[#a3b47a]/20 shadow-[0_0_0_2rem_rgba(163,180,122,.025),0_0_0_4rem_rgba(163,180,122,.02)]'></div>
                <div className='absolute bottom-0 right-[22%] -z-10 h-32 w-32 rounded-full bg-[#d47c60]/10 blur-3xl'></div>
                <div className='relative max-w-3xl'>
                    <p className='eyebrow mb-6 flex items-center gap-2'><Sparkles size={ 15 } /> Contact</p>
                    <h1 className='text-[clamp(3.2rem,8vw,7rem)] font-extrabold leading-[.9] tracking-[-.08em]'>Have an idea?<br /><span className='font-serif font-medium italic text-[#a3b47a]'>Let&apos;s make it real.</span></h1>
                    <p className='mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base'>Tell me what you&apos;re working on, what you&apos;re dreaming up, or where you could use a creative hand. I&apos;d love to hear about it.</p>
                </div>
                <div className='relative mt-8 inline-flex items-center gap-2 rounded-full border border-[#a3b47a]/25 bg-[#a3b47a]/10 px-4 py-2 text-xs font-semibold text-[#dce7c7]'>
                    <span className='relative flex h-2 w-2'><span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a3b47a] opacity-50'></span><span className='relative h-2 w-2 rounded-full bg-[#a3b47a]'></span></span>
                    Open to select projects
                </div>
            </header>

            <div className='grid gap-5 lg:grid-cols-[.8fr_1.2fr]'>
                <aside className='flex flex-col gap-5'>
                    <section className='surface p-6 sm:p-8'>
                        <p className='eyebrow mb-6'>Say hello</p>
                        <div className='space-y-3'>
                            <a href='mailto:ankitmall932@gmail.com' className='group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[.025] p-4 transition hover:border-[#a3b47a]/50 hover:bg-[#a3b47a]/[.06]'>
                                <span className='grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#a3b47a]/10 text-[#a3b47a]'><Mail size={ 19 } /></span>
                                <span className='min-w-0 flex-1'><span className='block text-[10px] font-bold uppercase tracking-[.15em] text-white/40'>Email</span><span className='mt-1 block break-all text-sm font-semibold'>ankitmall932@gmail.com</span></span>
                                <ArrowUpRight size={ 16 } className='text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#a3b47a]' />
                            </a>
                            <a href='tel:+919305617987' className='group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[.025] p-4 transition hover:border-[#a3b47a]/50 hover:bg-[#a3b47a]/[.06]'>
                                <span className='grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#d47c60]/10 text-[#d47c60]'><Phone size={ 19 } /></span>
                                <span className='min-w-0 flex-1'><span className='block text-[10px] font-bold uppercase tracking-[.15em] text-white/40'>Phone</span><span className='mt-1 block text-sm font-semibold'>+91 93056 17987</span></span>
                                <ArrowUpRight size={ 16 } className='text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#a3b47a]' />
                            </a>
                            <div className='flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[.025] p-4'>
                                <span className='grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#a49bbd]/10 text-[#a49bbd]'><MapPin size={ 19 } /></span>
                                <span><span className='block text-[10px] font-bold uppercase tracking-[.15em] text-white/40'>Based in</span><span className='mt-1 block text-sm font-semibold'>Gorakhpur, India</span></span>
                            </div>
                        </div>
                        <div className='mt-5 flex gap-3 border-t border-white/10 pt-5'>
                            <a href='https://www.instagram.com/ankit_mall_932' target='_blank' rel='noreferrer' aria-label='Instagram' className='grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-white/60 transition hover:border-[#d47c60]/50 hover:text-[#d47c60]'><Instagram size={ 19 } /></a>
                            <a href='https://github.com/ankitmall932/Hotel-Booking-Site' target='_blank' rel='noreferrer' aria-label='GitHub' className='grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-white/60 transition hover:border-[#a3b47a]/50 hover:text-[#a3b47a]'><GitHub fontSize='small' /></a>
                            <a href='https://wa.me/919305617987' target='_blank' rel='noreferrer' aria-label='WhatsApp' className='grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-white/60 transition hover:border-[#a3b47a]/50 hover:text-[#a3b47a]'><WhatsApp fontSize='small' /></a>
                        </div>
                    </section>

                    <section className='rounded-3xl bg-[#a49bbd] p-6 text-[#171713] sm:p-8'>
                        <p className='font-mono text-[10px] font-bold uppercase tracking-[.16em] text-[#39304f]/70'>Good things we can make</p>
                        <h2 className='mt-3 text-2xl font-extrabold tracking-tight'>Currently open to</h2>
                        <div className='mt-5 flex flex-wrap gap-2'>
                            { opportunities.map(item => <span key={ item } className='rounded-full border border-[#171713]/15 bg-white/20 px-3 py-2 text-xs font-semibold'>{ item }</span>) }
                        </div>
                    </section>
                </aside>

                <form ref={ form } onSubmit={ sendEmail } className='surface p-6 sm:p-8 lg:p-10'>
                    <div className='mb-8 flex items-start justify-between gap-4'>
                        <div><p className='eyebrow mb-3'>The first step</p><h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>Send a message.</h2><p className='mt-3 text-sm leading-6 text-white/50'>A few details are all it takes to get the conversation started.</p></div>
                        <span className='hidden h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#a3b47a]/10 text-[#a3b47a] sm:grid'><Send size={ 20 } /></span>
                    </div>
                    <div className='grid gap-5 sm:grid-cols-2'>
                        <label className='grid gap-2 text-xs font-semibold text-white/65'>Your name
                            <input type='text' name='user_name' placeholder='Ankit Mall' required className='min-h-12 w-full rounded-xl border border-white/10 bg-[#11100f]/70 px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#a3b47a]' />
                        </label>
                        <label className='grid gap-2 text-xs font-semibold text-white/65'>Email address
                            <input type='email' name='user_email' placeholder='you@example.com' required className='min-h-12 w-full rounded-xl border border-white/10 bg-[#11100f]/70 px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#a3b47a]' />
                        </label>
                        <label className='grid gap-2 text-xs font-semibold text-white/65 sm:col-span-2'>What would you like to talk about?
                            <textarea name='message' rows='6' placeholder='Tell me a little about your idea, project, or question...' required className='w-full resize-y rounded-xl border border-white/10 bg-[#11100f]/70 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-white/25 focus:border-[#a3b47a]' />
                        </label>
                    </div>
                    <div className='mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6'>
                        <div className='max-w-sm'>
                            <p className='text-xs text-white/40'>I usually reply within a couple of days.</p>
                            { submitStatus && <p role='status' aria-live='polite' className={ `mt-2 text-xs ${ submitStatus.startsWith('Message sent') ? 'text-[#a3b47a]' : 'text-[#e59a83]' }` }>{ submitStatus }</p> }
                        </div>
                        <button type='submit' disabled={ isSending } className='group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#a3b47a] px-6 text-sm font-extrabold text-[#171713] transition hover:-translate-y-0.5 hover:bg-[#b7c58f] disabled:cursor-wait disabled:opacity-65'>
                            { isSending ? 'Sending...' : 'Send message' }
                            { !isSending && <ArrowUpRight size={ 17 } className='transition group-hover:rotate-45' /> }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
