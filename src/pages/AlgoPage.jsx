// import { useParams, Link } from 'react-router-dom';

// function AlgoPage() {
//   const { id } = useParams();

//   return (
//     <div className="min-h-screen bg-white text-gray-800 p-6 font-mono">
//       <div className="max-w-3xl mx-auto">
//         <Link to="/" className="text-blue-600 hover:underline mb-4 block">&larr; Back to demo</Link>
//         <h1 className="text-3xl font-bold mb-4">About {id.toUpperCase().replace('-', ' ')}</h1>
//         <p className="text-gray-700 text-base leading-relaxed">
//           This is a placeholder page for the algorithm <strong>{id}</strong>.
//           You can provide an explanation, diagrams, pseudocode, or links here.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default AlgoPage;

import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function AlgoPage() {
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/content/${id}.md`)
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent('# Not Found\n\nNo documentation available for this algorithm.'));
  }, [id]);

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 font-mono">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-blue-600 hover:underline mb-4 block">&larr; Back to demo</Link>
        <div className="prose prose-slate">
          <Markdown content={content} />
        </div>
      </div>
    </div>
  );
}

function Markdown({ content }) {
  const [ReactMarkdown, setReactMarkdown] = useState(null);

  useEffect(() => {
    // import('react-markdown').then((mod) => setReactMarkdown(() => mod.default));
    Promise.all([
        import('react-markdown'),
        import('remark-gfm'),
        import('rehype-highlight')
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
