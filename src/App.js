import { useState, useRef } from 'react'
import './App.css';
import { Button } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'


function App() {
  const [input, setInput] = useState(null)
  const { register, errors, handleSubmit, watch } = useForm({});
  const onSubmit = data => {
    console.log("data", data)
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>The Mysterious Answer Machine</h1>
      </header>

      <body>
        <br />
        <h2>Type your question in the box:</h2>

        <form onSubmit={e => e.preventDefault()}>
          <textarea
            // name="content"
            type="text"
            placeholder="GPT-3 question..."
            rows="4" cols="50"
            {...register('question', { required: true, maxLength: 1000 })}
          />

          <div>
            <br />
            <Button
              onClick={handleSubmit(onSubmit)}
              size="huge"
              type="submit"
              inverted color='blue'
            >Ask!
            </Button>

          </div>
        </form>
      </body>
    </div>
  );
}

export default App;




