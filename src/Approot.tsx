import React, { useCallback, useState } from "react";
import App from "./App";
import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery, useMutation, useRelayEnvironment } from "react-relay/hooks";
import { RecordSourceSelectorProxy, Store } from "relay-runtime";
import {
  ApprootQuery,
  ApprootQuery$data,
  ApprootQuery$variables,
} from "./__generated__/ApprootQuery.graphql";
import {
  ApprootupdateBookQuery,
  ApprootupdateBookQuery$variables,
} from "./__generated__/ApprootupdateBookQuery.graphql";

const appquery = graphql`
  # Queries in graphql tags must start with the module name ('App') and end with 'Query'. Got 'allbook' instead.
  query ApprootQuery {
    books {
      id
      ...App_detail
    }
  }
`;

// const appMutateupdatequery = graphql`
//   # Queries in graphql tags must start with the module name ('App') and end with 'Query'. Got 'allbook' instead.

//   mutation ApprootupdateBookQuery($id: ID!, $book: bookInput!) {
//     updateBook(bookId: $id, book: $book) {
//       id
//       ...App_detail
//     }
//   }
// `;

function Approot(props: any) {
  // const [commitupdate] =
  //   useMutation<ApprootupdateBookQuery>(appMutateupdatequery);

  const data = useLazyLoadQuery<ApprootQuery>(appquery, {},{fetchPolicy: 'store-or-network'});
  console.log("approot......")
  console.log(data);


  console.log(useRelayEnvironment().getStore())
  console.log(useRelayEnvironment().getStore().getSource())
  console.log(useRelayEnvironment().getStore().getSource().get("1"))

  return (
    <React.Suspense fallback={<div>Loading.....</div>}>
      <App books={data.books[0]} />
      {/* <form
        className="form"
        onSubmit={(e: any) => {
          e.preventDefault();

          let update: any = {
            id: e.target[0].value,
            title: e.target[1].value,
          };

          commitupdate({
            variables: update,
            onCompleted: (response, errors) => {
              console.log("Response received from server.");
            },
            updater: (store) => {
              (window as any).store = store;
            },
            onError: (err) => console.error(err),
          });
        }}
      >
        <label htmlFor="fname">Book id:</label>
        <input type="number" id="fname" placeholder="Type Book id" /> <br></br>
        <label htmlFor="fname">Book title:</label>
        <input type="text" id="fname" placeholder="Type Book title" /> <br></br>
        <input type="submit" />
      </form> */}
    </React.Suspense>
  );
}

export default Approot;
