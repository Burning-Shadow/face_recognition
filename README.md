## README

### Introduction

This is our studio's webfront source code，the subsequent introduction will be added in the future...

### Programing Rules

- Our pragram based on "create-react-app", "redux" & "react-router-dom".

- U have to devide the most of components into two types: UI components & logic components.
- U have to store every variable by "Redux". Use "dispatch"、"getState"、"subscribe" in logic components. We have a folder called "store" to save them.
- Devided your code into different folder. Such as "Index", "Member", "JoinUs", "Blogs" ....
- Try to extract the public part to the folder called "Component", which will be use for lots of conditions.
- In our program we use "react-router-dom" to provide the different route, which may better than tranditional ways. So we decide to try it.

### Code Style Rules

- 2 blank space for Code indentation
- you'd better use  `Prettier - code formatter`  to formatting your code.