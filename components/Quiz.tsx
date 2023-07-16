import { FlashcardArray } from "react-quizlet-flashcard";

export default function Quiz(questionsContent) {
  const frontCardStyle = {
    // backgroundColor: '#fff',
    // boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // textAlign: 'center',
    // fontFamily: 'Arial, sans-serif',
    // fontSize: '18px',
    // width: '200px',
    // height: '150px',
    // perspective: '1000px',
  };

  const frontContentStyle = {
    // background:
    //   'linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(circle at top left, rgba(255, 255, 255, 0.4), transparent)',
    // backgroundBlendMode: 'multiply',
  };

  const backCardStyle = {
    // backgroundColor: '#f8f8f8',
    // boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // textAlign: 'center',
    // fontFamily: 'Arial, sans-serif',
    // fontSize: '18px',
    // width: '200px',
    // height: '150px',
    // perspective: '1000px',
    // transform: 'rotateY(180deg)',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const backContentStyle = {
    // background:
    //   'linear-gradient(rgba(248, 248, 248, 0.6), rgba(248, 248, 248, 0.6)), radial-gradient(circle at top left, rgba(248, 248, 248, 0.4), transparent)',
    // backgroundBlendMode: 'multiply',
  };

  const flashcardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: "16px",
    boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(4.8px)",
    // -webkit-backdrop-filter: blur(4.8px);
    border: "1px solid rgba(255, 255, 255, 0.3)",
    // position: 'relative',
    // width: '100%',
    // height: '100%',
    // transformStyle: 'preserve-3d',
    // transition: 'transform 0.6s',
    // transformOrigin: 'center center',
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FlashcardArray
        cards={questionsContent.questions}
        backContentStyle={{
          color: "black",

          fontSize: "1.5rem",
          padding: "50px",
          textAlign: "center",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "16px",
          boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(4.8px)",
          // -webkit-backdrop-filter: blur(4.8px);
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
        frontContentStyle={{
          textAlign: "center",
          padding: "50px",
          color: "black",

          fontSize: "2rem",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "16px",
          boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(4.8px)",
          // -webkit-backdrop-filter: blur(4.8px);
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      />
    </div>
  );
}
