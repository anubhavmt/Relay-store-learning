import "./App.css";
import { graphql } from "babel-plugin-relay/macro";
import { useFragment, useLazyLoadQuery, useMutation } from "react-relay";
import { App_detail$key } from "./__generated__/App_detail.graphql";

const bookDetailFragment = graphql`
  # Fragments in graphql tags must start with the module name ('Author'). Got 'author_detial' instead.
  fragment App_detail on Book {
    # id
    title
  }
`;

// type Props = {
//   books: App_detail$key;
// };

function App( props : any) {
  // let here: any = [];

  console.log(props)
  const data = useFragment(bookDetailFragment, props.books);

  console.log("app......")
  console.log(data);
  //   console.log(environment);
  // data.books.forEach((element) => {
  //   // console.log(element);
  //   here.push(<Title aBook={element} key={element.title} />);
  // });

  return <div>{"data.title"}</div>;
}

export default App;
