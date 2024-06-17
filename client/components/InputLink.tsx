'use client';

import Image from 'next/image';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Response from './Response';
import Loading from './Loading';


const InputLink = () => {
  const pathname = usePathname();
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSendClick = async () => {
    const endpoint = pathname === '/article' ? '/summarize-article' : '/summarize-video';

    try {
      setLoading(true);
      setError(null);
      const res = await axios.post(`https://synthsum-api.onrender.com${endpoint}`, { url: link });
      setResponse(res.data.summary);
      console.log('Response:', res.data.summary); // Debugging response
    } catch (err) {
      console.error('Error sending API request:', err);
      setError('Failed to fetch summary. Please try again.');
    } finally {
      setLoading(false);
      console.log('Loading:', loading); // Debugging loading state
    }
  };

  return (
    <>
      <div className="flex">
        <div className="flex bg-white w-fit rounded-xl px-3">
          <Image src="/icons/link.svg" alt="Link" width={20} height={20} />
          <input
            type="text"
            id="link"
            value={link}
            placeholder={pathname === '/article' ? 'Enter link to the article here' : 'Enter the link to the YouTube video here'}
            className="focus:outline-none w-[80vw] rounded-lg px-5 py-2 text-black font-medium"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <Image
          src="/icons/send.svg"
          alt="send"
          width={28}
          height={28}
          className="cursor-pointer mx-2"
          onClick={handleSendClick}
        />
      </div>
      <div>
        {loading ? (
          <Loading />
        ) : (
          response && <Response response={response} />
        )}
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </>
  );
};

export default InputLink;
