import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';


function ExplanationCard({ algorithm }) {
  const [audience, setAudience] = useState('general');
  const [content, setContent] = useState('');

  useEffect(() => {
    // fetch(`/content/${algorithm}-${audience}.md`)
    fetch(`/content/${algorithm}/${audience}.md`)
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent(`# Not Found\n\nNo explanation available for this audience.`));
  }, [algorithm, audience]);

  return (
    <div className="mt-10 p-6 border border-gray-300 rounded-lg shadow-sm bg-slate-50">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">🔍 Explanation by Audience</h2>
        <select
          className="border border-gray-300 rounded px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
        >
          <option value="general">General</option>
          <option value="kids">Kids</option>
          <option value="students">Students</option>
          <option value="engineers">Engineers</option>
        </select>
      </div>
      <div className="prose prose-slate prose-sm max-w-none">
      {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown> */}
      <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  rehypePlugins={[rehypeRaw]}
  components={{
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-secondary/20 rounded-md text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-card/80">{children}</thead>,
    th: ({ children }) => (
      <th className="border border-secondary/20 px-4 py-2 text-secondary font-mono">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-secondary/20 px-4 py-2">{children}</td>
    ),
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 font-mono text-gray-800">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3 font-mono text-gray-700">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold mt-5 mb-2 font-mono text-gray-600">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-bold mt-4 mb-2 font-mono text-gray-500">{children}</h4>,
    p: ({ children }) => <p className="my-4 leading-relaxed text-gray-800">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 py-1 my-4 bg-gray-50 rounded-r-md">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-6 border-gray-300" />,
    a: ({ children, href }) => {
      const isExternal = href?.startsWith('http');
      return (
        <a
          href={href}
          className="text-blue-600 hover:text-blue-800 underline transition-colors"
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    },
  }}
>
  {content}
</ReactMarkdown>
      </div>
    </div>
  );
}

export default ExplanationCard;
