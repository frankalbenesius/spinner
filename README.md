# spinner

This is a spinner made with React. The size of it's sectors changes based on spin history, so there's a higher variance than a normal spinner.

## Steps to run locally:

1. Make sure you have "node" installed on your computer. Node is a tool that let's us run JavaScript outside of browsers.
    1. You can check if you have node installed by running `node --version` in your terminal. It should give you a version number back, like `v8.11.1`.
    1. If you don't have node, you can [download it here](https://nodejs.org/en/). You may need to restart your terminal after installing node to use it.
1. Clone this repository into your local file system. Closing this repo will make a new folder in the current terminal directory. There's a big green button above that'll direct you on how to clone a git repository, but it'll look something like this:
    
    `git clone https://github.com/frankalbenesius/spinner`
1. Use your terminal to move into the newly created `/spinner` directory:
    
    `cd spinner`
1. Install project dependencies using "npm" (npm comes with node, it's the node package manager):
    
    `npm install`
1. Run the project on a local development server. In this scenario, "dev" is an npm script we've defined in the project's `package.json`. We are telling npm to "run" it.
    
    `npm run dev`
    
    This should start the app locally. Which means you should be able to go see the spinner in your web browser at `localhost:3000`. Your terminal will tell you what the address is, too. Now, whenever you make a change to the codebase that change will be immediately updated on the instance running in your browser.
