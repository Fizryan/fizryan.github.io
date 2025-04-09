import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaRegCopy, FaJava } from 'react-icons/fa';
import { SiCplusplus, SiSharp, SiLua, SiJavascript, SiPython } from 'react-icons/si';
import classNames from 'classnames';

const codeSnippets = [
  {
    language: 'C++',
    icon: <SiCplusplus className="text-blue-400" />,
    code: `#include <iostream>\nint main() {\n  std::cout << "Hello World! 👋" << std::endl;\n  return 0;\n}`,
    color: 'text-blue-400 border-blue-400'
  },
  {
    language: 'C#',
    icon: <SiSharp className="text-purple-400" />,  
    code: `using System;\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello from CSharp! 🎮");\n  }\n}`,
    color: 'text-purple-400 border-purple-400'
  },
  {
    language: 'Java',
    icon: <FaJava className="text-red-400" />,
    code: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Java says hello! ☕");\n  }\n}`,
    color: 'text-red-400 border-red-400'
  },
  {
    language: 'Lua',
    icon: <SiLua className="text-blue-600" />,
    code: `function greet()\n  print("Hello from Lua! 🌙")\nend\ngreet()`,
    color: 'text-blue-600 border-blue-600'
  },
  {
    language: 'JavaScript',
    icon: <SiJavascript className="text-yellow-400" />,
    code: `const greet = () => console.log("Hello JS! 🚀");\ngreet();`,
    color: 'text-yellow-400 border-yellow-400'
  },
  {
    language: 'Python',
    icon: <SiPython className="text-green-400" />,
    code: `def greet():\n    print("Python says hi! 🐍")\ngreet()`,
    color: 'text-green-400 border-green-400'
  }
];

const SyntaxHighlighter = ({ code, language }: { code: string; language: string }) => {
  const highlightSyntax = useCallback((text: string) => {
    const escapeHtml = (str: string) =>
      str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    const keywords = {
      js: /\b(const|function|let|return|console|log)\b/g,
      python: /\b(def|print)\b/g,
      java: /\b(public|class|static|void|main|String|System|out|println)\b/g,
      cpp: /\b(include|int|main|std::cout|return)\b/g,
      csharp: /\b(using|System|Console|WriteLine|class|static|void|Main)\b/g,
    };

    const stringRegex = /(["'`])(?:(?=(\\?))\2.)*?\1/g;
    const commentRegex = /\/\/.*|#.*$/gm;

    const langKey =
      language.includes('python') ? 'python' :
      language.includes('java') ? 'java' :
      language.includes('c++') ? 'cpp' :
      language.includes('c#') ? 'csharp' :
      'js';

    return text.split('\n').map((line, i) => {
      let escaped = escapeHtml(line);

      // Highlight strings first
      escaped = escaped.replace(stringRegex, (match) =>
        `<span class="text-green-400">${match}</span>`
      );

      // Highlight comments
      escaped = escaped.replace(commentRegex, (match) =>
        `<span class="text-gray-500">${match}</span>`
      );

      // Highlight keywords (outside already-highlighted spans)
      escaped = escaped.replace(keywords[langKey], (match) =>
        `<span class="text-purple-400">${match}</span>`
      );

      return (
        <div key={i} className="flex">
          <span className="text-gray-500 w-8 select-none text-right pr-2">{i + 1}</span>
          <span
            className="flex-1 whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: escaped }}
          />
        </div>
      );
    });
  }, [language]);

  return <>{highlightSyntax(code)}</>;
};


export const CodeShowcase = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isCopying, setIsCopying] = useState(false);

  const currentSnippet = codeSnippets[snippetIndex];

  useEffect(() => {
    if (!isHovered) {
      if (charIndex < currentSnippet.code.length) {
        const timeout = setTimeout(() => {
          setDisplayedCode((prev) => prev + currentSnippet.code[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, Math.random() * 50 + 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedCode('');
          setCharIndex(0);
          setSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, snippetIndex, isHovered]);

  const handleCopy = async () => {
    setIsCopying(true);
    await navigator.clipboard.writeText(currentSnippet.code);
    setTimeout(() => setIsCopying(false), 2000);
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 relative group">
      <div className="absolute inset-0 bg-black/50 blur-3xl -z-10" />

      <motion.div
        className="max-w-3xl mx-auto bg-gray-900/90 rounded-lg border shadow-2xl overflow-hidden transition-all"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Header */}
        <div className={classNames('flex items-center px-4 py-3 border-b bg-gray-800', currentSnippet.color)}>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 flex items-center justify-center space-x-2">
            <FaTerminal className={currentSnippet.color.split(' ')[0]} />
            <span className={classNames('text-sm font-mono', currentSnippet.color.split(' ')[0])}>
              {currentSnippet.language}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="p-2 hover:bg-gray-700 rounded-md transition"
          >
            <AnimatePresence>
              {isCopying ? (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-green-400"
                >
                  Copied!
                </motion.span>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <FaRegCopy className="text-gray-400 hover:text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Code */}
        <div className="p-4 sm:p-6 relative min-h-[200px]">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 to-transparent opacity-20" />
          <pre className="font-mono text-sm sm:text-base relative">
            <SyntaxHighlighter
              code={displayedCode}
              language={currentSnippet.language.toLowerCase()}
            />
            {!isHovered && (
              <motion.div
                className="inline-block w-2 h-5 ml-1 bg-green-400"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            )}
          </pre>
        </div>

        {/* Floating Icon */}
        <motion.div
          className="absolute right-4 bottom-4 text-4xl opacity-20"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {currentSnippet.icon}
        </motion.div>
      </motion.div>

      {/* Floating Bits */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-green-400 opacity-20 pointer-events-none"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`
          }}
          animate={{
            y: ['0%', '100%'],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
        >
          {Math.random() > 0.5 ? '0' : '1'}
        </motion.div>
      ))}
    </section>
  );
};
