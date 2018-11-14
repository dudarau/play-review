
## Articles

- [Theory plus React vs Angular approaches](https://levelup.gitconnected.com/a-comparison-of-server-side-rendering-in-react-and-angular-applications-fb95285fb716)

1.  Is the entire application hidden behind authentication? If yes, no point in doing SSR for the sake of Search Engine Optimization (SEO). However, to make the application load faster, some still choose to do SSR but my preference is to rely on service workers (depending on use case) for caching and enhancing page loads.
2.  Can the content be made static? For example, if we have a demo page that we want indexed by web crawlers, can the content be hardcoded into the templates? Can these templates be accessed directly without use of a router? Can we try to preload these resources?
3.  There are also cons to consider such as increased complexity of the application, increased initial page size, slower response from the server (since it no longer returns a lean HTML page which gets constructed on the client).

- [SSR for React](https://medium.freecodecamp.org/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e)

Cons of Rendering React on the Server

- SSR can improve performance if your application is small. But it can also degrade performance if it is heavy.
- It increases response time (and it can be worse if the server is busy).
- It increases response size, which means the page takes longer to load.
- It increases the complexity of the application.

- [Stackoverflow answer about SSR](https://stackoverflow.com/questions/27290354/reactjs-server-side-rendering-vs-client-side-rendering)

- [with styled-components](https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf)