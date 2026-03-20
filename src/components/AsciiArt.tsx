import { useState, useEffect } from 'react';

const lineasArco = [
  '           .----------.',
  '          /            \\',
  '         /      ||      \\',
  '        /       ||       \\',
  '       |        ||        |',
  '    ========================',
  '    [  CIUDAD HEROICA TACNA ]',
];

export const AsciiArt = () => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentText = '';
    let lineIndex = 0;
    let charIndex = 0;

    const intervalId = setInterval(() => {
      if (lineIndex < lineasArco.length) {
        if (charIndex < lineasArco[lineIndex].length) {
          currentText += lineasArco[lineIndex][charIndex];
          charIndex++;
          setDisplayedText(currentText);
        } else {
          currentText += '\n';
          lineIndex++;
          charIndex = 0;
          setDisplayedText(currentText);
        }
      } else {
        clearInterval(intervalId);
      }
    }, 15); // Typing speed in ms

    return () => clearInterval(intervalId);
  }, []);

  return (
    <pre className="font-mono text-[10px] md:text-sm text-primary-container leading-[1.2] whitespace-pre font-bold">
      {displayedText}
    </pre>
  );
};
