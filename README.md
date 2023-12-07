# React Tutorial

    >> SPA = Single Page Application
        >   ..... index.html .....
            <html>
                <body>
                    <div id="root"></div>
                </body>
            </html>

        // Basically here we didint do any change in main index.html file rather than we manipulate using that Id which is in JSX

# >> Components = [ group of codes ]

        > 1. class component, 2. function component
        >>>> this are js function which returns markup
        >>>> name of this component start with capital letter

    >.  function MyButton() {
            return (
                <button>Click</button>
            );
        }
    >.  nesting the component :
        export defaoult function MyApp() {
            return (
                <h1>Welcome to app</h1>
                <MyButton />
            );
        }

    >> Data Binding = Uni Directional flow of the data
        > Basically ( parent component - child component )

    >> Virtual DOM = Means if we change any of our project component, then only that partcular component only get reload not the whole app or website page..

    >> Redux ( state management ) = Manages the memory/storage like if we wanna deal with browser/local storage

    >> Hooks ( Lifecycle methods : like when it created, when it got updated, when it got deleted)

# creation : npx (node package exicution)

    npx create-react-app projName

    after creation you need to change your directory to you app-directory
        > cd projName
        > the to start your project in browser [ npm start ]

# state => data required for a component in order to perform certain logic, it for some point of time ex: cookies, session etc. Basically we use it to store some inforation

# in order to access state property we need hooks. Basicslly we can interact with the information we sstored in state

    >> useState(),
    >> setState(),
    ** import { useState } from "react"
    syntax: const [variable, function] = useState();
    ex: const [count, setCount] = usestate();

    ** whatever we do in setState() it will be reflected on state automatically

# props => when we need to pass infformation from one component to other component then we use props.

    >> parent node -> child node
    >> we can assume it like uni-directional inheritance
    >> ex: App.js -> ClassComponent.jsx | FunctionComponent.jsx

## in props we can't pass number directly, we have to pass String literal or number within {}

    ex: <FunctionalComponent name="Deepesh" age={25}>

    ** if we want to pass internal data not static data then

    function App() {
        const car = "Mustang" // internal data
        return (
            <div className="App">
            <p>Jay Shree Ram !!</p>
            <ClassComponent />
            <FunctionComponent name="Deepesh" age={25} car={car} />
            </div>
        );
    }
