import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ExplanationCard from '../components/ExplanationCard';

function AlgoPage() {
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/content/${id}.md`)
      .then((res) => res.text())
      .then(setContent)
      .catch(() =>
        setContent('# Not Found\n\nNo documentation available for this algorithm.')
      );
  }, [id]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 text-gray-800 p-6 font-mono">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Back Button */}
        <Link
          to="/"
          className="text-blue-600 hover:underline text-sm block"
        >
          &larr; Back to demo
        </Link>

        {/* Main Content */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <h1 className="text-3xl font-bold mb-4 text-slate-800">
            About {id.toUpperCase().replace('-', ' ')}
          </h1>
          <div className="prose prose-slate max-w-none">
            <Markdown content={content} />
          </div>
        </div>

        {/* Explanation Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4 text-slate-700">
            Choose an Audience
          </h2>
          <ExplanationCard algorithm={id} />
        </div>
      </div>
    </div>
  );
}

function Markdown({ content }) {
  const [ReactMarkdown, setReactMarkdown] = useState(null);

  useEffect(() => {
    Promise.all([
      import('react-markdown'),
      import('remark-gfm'),
      import('rehype-highlight'),
    ]).then(([rm, gfm, hl]) => {
      setReactMarkdown(() => (props) => (
        <rm.default
          remarkPlugins={[gfm.default]}
          rehypePlugins={[hl.default]}
          {...props}
        />
      ));
    });
  }, []);

  return ReactMarkdown ? <ReactMarkdown>{content}</ReactMarkdown> : <p>Loading...</p>;
}

export default AlgoPage;
