import {useEffect} from "react";
import './App.css';
import SignUp from "./components/SignUp";

import {checkLISP} from "./LISP";

function App() {


    useEffect(() => {
        // I put this here to show off the checkLISP function working, it has no other purpose
        const str1 = '((()))';
        const str2 = '((((()))';
        const str3 = '((())))';

        console.log('should be true: ',checkLISP(str1));
        console.log('should be false: ',checkLISP(str2));
        console.log('should be false: ',checkLISP(str3));
    }, [])

  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
