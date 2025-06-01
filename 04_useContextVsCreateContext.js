/*---
createContext and useContext are used in context api for creating a context and to consume the date in the functional component
by using createContext we create a context and make data available to the functional component via Provider,
useContext is a hook that is used to consume that data in the consumer component

let me clarify this more with an example:
let's assume we a are creating a toggle theme functionality, then we will create a ThemeContext
and pass the data value i.e theme through ThemeContext.Provider 
and we can access that theme value inside our consumer component by using the useContext hook
that will take ThemeContext as an argument/initialValue
---*/

/*---
✅ Summary Table:
Feature	                        createContext	                                        useContext

Purpose	                        Creates a new Context object	                        Consumes an existing Context
Return Type	                    { Provider, Consumer } object	                        The current context value
Usage Location	                Outside component (usually in context file)	            Inside a functional component
Replacement For	—	                                                                    Replaces Context.Consumer
Dependencies	                Available from React 16.3+	                            Available from React 16.8+ (Hooks)
---*/