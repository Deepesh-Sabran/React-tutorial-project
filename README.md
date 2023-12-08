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

# props => when we need to pass information from one component to other component then we use props.

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

# ex: what we perform :

    function App() {
        const [name, setName] = useState("DS");
        const car = "mustang";
        return (
            <div className="App">
            <p>Jay Shree Ram !!</p>
            <ClassComponent /> {/* child component */}
            {/* passing the props here */} {/* child component */}
            <FunctionComponent name={name} age={25} car={car} setName={setName} />
            {/* {name} it is internal defined variable, car also */}
            {/* {setName} it is internal ddefined function */}
            where as age={25} is statically passed
            </div>
        );
    }

# Routing :

    >> It's basically an end-point where we pass any information from one particular page to other page

    >> Router > Routes > Route

    .. Router : where we have all kind of Routes
    .. Routes(group of route) : Where we encapsulating multiple type of Route
    ex: /home /aboutUs /contact etc.

# to download router : npm i react-router-dom

version ^6.20.1 = this means current version is 6, minor cganges is 20, and bug fixed after releasing is 1...
if we need to do some major cganges then it shows in place of 6 like next version is 7

# workflow according to router

    >> index.js(browser router) >> app.js >> different routes
    >> index.js >> app.js >> pages

    >> ex: webpage
                - /contact > /aboutUs > /signIn

# Layout (HOC || High Order Component):

    <!-- HOC's can add additional info/features to the existing component -->

    >> It's a different path in a component

    /signIn
        > let suppose it have Nav & Footer so these are the layot for signIn


    *** Basically let suppose we need a  Nav & Footer for our ClassComponent & FunctionalComponent so we dont need to define it multiple times like in ClassComponent & FunctionalComponent.... Rather than that we define the Nav & Footer in a HOC & then wrap those Component within HOC ....

# React Lifecycle Method

    >> render() {

    }

# cdm (componentDidMount) = let's say in a web page i've 4 components & at the time of loadi (onload) i need only 2 component to be shown .... so this cdm checks that like the condition is working fine or not ...

    ** cdm gives boolean value as TRUE or FALSE

    componentDidMount() {
        Welcome to my Application ...
        We can add any thing as of our choice ...
    }

    it means wehen we open the app. initially we got to see this message on our app screen (Welcome to my Application ...)

# cdu (componentDidUpdate) = it checks that particular component get updated or not ...

    componentDidUpdate() {
        input tab => ... hit-enter
    }
    here when we hit-enter after filling the form lets say .. so we have new fields.. so this "cdu" checks this like it got updated or not

# cwu (componentWillUnmount) = basically before clossing any buffer like system or any thing which consume some memory & you need to relese those memory before closing that particular component, then we'll do it with "cwu" ...
