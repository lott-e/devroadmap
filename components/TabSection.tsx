import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import ReactFlashCards from '../pages/frontend/react/Quiz';
import Quiz from './Quiz';

interface TabSectionProps {
  testYourselfContent: string;
  booksContent: string;
  resourcesContent: string;
  
}

const TabSection: React.FC<TabSectionProps> = ({
  booksContent,
  resourcesContent,
  coursesContent,
  questionsContent,
}) => {
  const [activeTab, setActiveTab] = useState('testYourself');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const tabContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0px',
  };

 

  const contentStyle: React.CSSProperties = {
    backgroundColor: '#f8f8f8',
    borderRadius: '0 20px 20px 20px',
    padding: '20px',
    marginTop: '-2px',
    color: '#006BE6',
    // textDecoration: 'underline'
  };

  const tabStyle: React.CSSProperties = {
    backgroundColor: '#f8f8f8',
    borderRadius: '20px 20px 0 0',
    padding: '10px 20px',
    cursor: 'pointer',
    marginRight: '10px',
    borderBottom: 'none',
    textDecoration: 'none',
    color: 'black',
    width: '100%',
    display: 'center',
    textAlign: 'center'
  };
  
  const activeTabStyle: React.CSSProperties = {
    borderBottom: '2px solid #007bff',
  
  };



  

  const renderers = {
  
    heading: ({ level, children }) => {
      const HeadingComponent = `h${level}`;
      return <HeadingComponent>{children}</HeadingComponent>;
    },
    link: ({ href, children }) => (
      <a href={href} target="_blank" rel="noopener noreferrer" >

      {children}
    </a>
    ),
    paragraph: ({ children }) => <p>{children}</p>,
    list: ({ ordered, children }) =>
      ordered ? <ol>{children}</ol> : <ul>{children}</ul>,
    listItem: ({ children }) => <li>{children}</li>,
    text: ({ value }) => value,
  };

  return (
    <div>
    <div style={tabContainerStyle}>
  <div
    style={activeTab === 'testYourself' ? { ...tabStyle, ...activeTabStyle } : tabStyle}
    onClick={() => handleTabChange('testYourself')}
  >
    Test Yourself
  </div>
  <div
    style={activeTab === 'courses' ? { ...tabStyle, ...activeTabStyle } : tabStyle}
    onClick={() => handleTabChange('courses')}
  >
    Courses
  </div>
  <div
    style={activeTab === 'books' ? { ...tabStyle, ...activeTabStyle } : tabStyle}
    onClick={() => handleTabChange('books')}
  >
    Books
  </div>
  
  <div
    style={activeTab === 'resources' ? { ...tabStyle, ...activeTabStyle } : tabStyle}
    onClick={() => handleTabChange('resources')}
  >
    Resources
  </div>
</div>
      <div style={contentStyle}>
        {activeTab === 'testYourself' && (
          <Quiz questions={questionsContent}  />
        )}
        {activeTab === 'books' && (
          <ReactMarkdown renderers={renderers}>
            {booksContent}
          </ReactMarkdown>
        )}
          {activeTab === 'courses' && (
          <ReactMarkdown renderers={renderers}>
            {coursesContent}
          </ReactMarkdown>
        )}
        {activeTab === 'resources' && (
          <ReactMarkdown renderers={renderers}>
            {resourcesContent}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default TabSection;
