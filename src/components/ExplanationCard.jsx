import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

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
      <div className="prose prose-sm prose-slate">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default ExplanationCard;
