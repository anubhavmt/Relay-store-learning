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
      ...App_detail
    }
  }
`;

const appMutateupdatequery = graphql`
  # Queries in graphql tags must start with the module name ('App') and end with 'Query'. Got 'allbook' instead.

  mutation ApprootupdateBookQuery($id: ID!, $book: bookInput!) {
    updateBook(bookId: $id, book: $book) {
      ...App_detail
    }
  }
`;

function Approot(props: any) {
  const [commitupdate] = useMutation<ApprootupdateBookQuery>(appMutateupdatequery);

  const data = useLazyLoadQuery<ApprootQuery>(appquery, {},{fetchPolicy: 'store-or-network'});
  // console.log("approot......")
  // console.log(data);



  // .........................................Let's go for learning useRelayEnvironment return type , so that can be used some where else also
  // Aim get RecordProxy that's it
  // some says that this is used by relay it self to managed , so not recommend to use this. always use with update etc. but hume to kar na hai


  const storeEnv = useRelayEnvironment().getStore();
  console.log(".......................Not Understandable.......useRelayEnvironment().getStore(),   type: RelayModernStore")
  console.log(storeEnv);
  console.log("......................Not Understandable........useRelayEnvironment().getStore().getSource(),   type: RelayModernStore")
  console.log(storeEnv.getSource());



  console.log("...........These are the useful function for use...............")
  console.log("..............................useRelayEnvironment().getStore().getSource().getRecordIDs()")

  /*

  return the list of ids which we use in store (referring to store which we get in updated)
  store.get("") 
  */
  console.log(storeEnv.getSource().getRecordIDs());

  // use to get the data for the id store.get("1")

  console.log(storeEnv.getSource().get("1"));  // can assume this as RecordProxy

  // refer: to deal with object in js 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
  const idObject : any =  storeEnv.getSource().get("1");   // type object 


  console.log(idObject?.id)  // like getValue
  console.log(idObject?.title)  // like getValue
  console.log(idObject?.__id)
  const authorRef : any = idObject?.author;   // jugaad to get ref
  console.log(authorRef?.__ref)
  console.log(storeEnv.getSource().get(authorRef?.__ref))

  // idObject["abc"] = "fdasdf";    error so it means , 

  console.log(idObject  )
  // console.log(authorRef?.__ref)


  /*
  final word
  useRelayEnvionment for store is not user friendly 
  and if you want to use it , only use it for reading only ,
  because it doesnot have any thing to update inside record
  
  have only these

    get<T extends object = {}>(dataID: DataID): Record<T> | null | undefined;
    getRecordIDs(): DataID[];
    getStatus(dataID: DataID): RecordState;
    has(dataID: DataID): boolean;
    size(): number;
    toJSON(): { [key: string]: Record };

  how see approotfetchquery component

  So it only useful when don't fetch query , if some record exist. and we know its id.

  */
  




































  /*

  The useRelayEnvironment().getStore() function returns a Store object from the Relay Modern library. The type of object returned depends on the method called on the Store object.

  Calling getStore().getSource() returns a RecordSource object, which is an interface for reading and writing records in the store.

  Calling getStore().getSource().get(<dataID>) returns a RecordProxy object, which is a mutable interface for a single record in the store with the specified dataID.

  Calling getStore().getSource().get(<selector>) returns a RecordSourceSelectorProxy object, which is a mutable interface for a set of records in the store that match the specified selector.

  So, depending on which method is called on the Store object, the returned type could be either a RecordProxy or a RecordSourceSelectorProxy.




  RelayModernStore is a central store for managing the data cache of a Relay application, 
  while RelayRecordSourceSelectorProxy is a lower-level API for reading from and writing to
  specific pieces of data in the store.


  The type of the store variable obtained from environment.getStore() is RelayModernStore. 
  The RelayModernStore is the central class in Relay that manages the cache of records, 
  and is responsible for reading and writing data to the cache. It is not a RecordSourceSelectorProxy 
  or RecordProxy, but it provides methods to interact with those objects.

  You can use the RelayModernStore object to get a RecordSourceSelectorProxy using the getSource
  method, which returns a RelayRecordSourceSelectorProxy. For example, to read data from the 
  cache using a RelayRecordSourceSelectorProxy, you can use the following code:


  const store = environment.getStore();
  const source = store.getSource();
  const user = source.get('123');
  console.log(user.getValue('name')); // Logs the name of the user record with ID '123'
  
  In this example, we get the RelayModernStore from the RelayModernEnvironment, 
  and use the getSource method to get a RelayRecordSourceSelectorProxy. We then use the get 
  method to get the user record with ID '123', and use the getValue method to read the value of
   the name field on the user record.




   Normalized Relay Store  --> object with id 
   Flattened Relay Store  --> with client prefix


  how does it works ? 



  */



    return (
    <React.Suspense fallback={<div>Loading.....</div>}>
      <App books={data.books[0]} />
      <form
        className="form"
        onSubmit={(e: any) => {
          e.preventDefault();

          let update: any = {
            id: e.target[0].value,
            book:{
              id: e.target[0].value,
              title: e.target[1].value,
              author: {
                id: e.target[2].value,
                firstname: e.target[3].value,
                secondname: e.target[4].value
              }
            }
          };

          commitupdate({
            variables: update,
            onCompleted: (response, errors) => {
              console.log("Response received from server.");
            },
            updater: (store) => {

              console.log("in mutaiton");


              console.log("Type: RelayRecordSourceSelectorProxy")
              // Doc: https://relay.dev/docs/api-reference/store/#recordsourceselectorproxy

              /*

                interface RecordSourceSelectorProxy {

                create(dataID: string, typeName: string): RecordProxy;

                ->Creates a new record in the store given a dataID and the typeName(type Book so this book is typename) as defined by the GraphQL schema 
                
                .............................................................................................
                
                delete(dataID: string): void;

                -> same like create

                .............................................................................................

                get(dataID: string): ?RecordProxy;

                .............................................................................................

                getRoot(): RecordProxy;

                -> Returns the RecordProxy representing the root of the GraphQL document.


                .............................................................................................


                getRootField(fieldName: string): ?RecordProxy;

                -> Typings: 
                getRootField<K extends keyof T>(fieldName: K): RecordProxy<NonNullable<T[K]>>;

                This method also allows you to fetch records from the store. How is this different 
                from the getRoot method? They differ in scope and use. While getRoot can get data 
                from the entire store, getRootField cannot. It can only get the data corresponding 
                to the concerned operation (the operation that invoked the updater function).

                For example, consider the updateUser mutation:

                mutation UpdateUserMutation{
                  updateUser(id: "ANOTHERUSER1", newName: "Random Name"){
                    id
                    name
                  }
                }
                This results in following GraphQL document:

                updateUser(id: "ANOTHERUSER1", newName: "Random Name"){
                  id
                  name
                }
                getRootField can get data from this document only. But the good thing is 
                that since this was made for small documents, you can directly get the records 
                — without binding arguments to the field.

                const payload = store.getRootField("updateUser");
                You can use the RecordProxy to access the payload of the mutation.

                .............................................................................................

                getPluralRootField(fieldName: string): ?Array<?RecordProxy>;


                getRootField cannot get mutliple records. For such cases, we have the getPluralRootField method. So if the operation returns a collection of GraphQL objects instead of a single object, we use this method. What if the operation returned a Scalar or an array of Scalars? In that case, they won’t be stored in the store as the operation payload did not obey Global Object Identification. Moving on, Consider the generateQuestions mutation:

                mutation GenerateQuestionsMutation{
                # generate n random questions
                # generateQuestions(n: Int!): [Question!]!
                  generateQuestions(n: 10){
                    id
                    description
                  }
                }
                This results in following GraphQL document:

                generateQuestions(n: 10){
                  # Returns 10 randomly generated questions
                  id
                  description
                }
                If I try to use store.getRootField("generateUsers") , 
                it won’t work as generateQuestions returns an array of Users . 
                Instead, I need to do

                const payload = store.getRootPluralField("generateQuestions");
                The payload will contain the array of Questions (RecordProxy of type Question) .
                
                You can then access it like a normal array

                const descriptions = payload.map(question => question.getValue("description"));

                .............................................................................................

                invalidateStore(): void;


                Globally invalidates the Relay store. This will cause any data that was written to the
                store before invalidation occurred to be considered stale, and will be considered to
                require refetch the next time a query is checked with environment.check().

                Example
                store.invalidateStore();

                After global invalidation, any query that is checked before refetching it will be 
                considered stale:

                environment.check(query) === 'stale'
 
              */

              // create

              // const manualdata = store.create("anubhav|122", "manual")





              // console.log(store);
              // console.log("............................store.get(1)")
              // console.log(store.get("1"));
              // console.log("............................store.get(client:root)")
              // console.log(store.get("client:root"));
              // console.log("............................store.get(3)")
              // console.log(store.get("3"));
              // console.log("............................store.get(wrong)")
              // console.log(store.get("wrong")); // will get undefined
              // console.log("............................store.getRoot()")
              // console.log(store.getRoot());
              
              

              // //getRootField
              // console.log("............................store.getRootField()")    
              // console.log(store.getRootField('updateBook'));



              

              // (window as any).store = store;

              // delete
              // store.delete("1")

              //..............................................Now Play with RecordProxy...............

              //https://relay.dev/docs/api-reference/store/#recordproxy


              /*

                interface RecordProxy {

                copyFieldsFrom(sourceRecord: RecordProxy): void;


                copyFieldsFrom(sourceRecord: RecordProxy): void
                Mutates the current record by copying the fields over from the passed in record sourceRecord.

                Example
                const record = store.get(id1);
                const otherRecord = store.get(id2);
                record.copyFieldsFrom(otherRecord); // Mutates `record`

                
                .............................................................................................

                getDataID(): string;
                
                -> Returns the dataID of the current record.

                .............................................................................................
                
                
                getLinkedRecord(name: string, arguments?: ?Object): ?RecordProxy;


                rootField {
                  viewer(arg: $arg) {
                    id
                  }
                }


                const rootField = store.getRootField('rootField');
                const viewer = rootField.getLinkedRecord('viewer', {arg: 'value'});


                .............................................................................................

                getLinkedRecords(name: string, arguments?: ?Object): ?Array<?RecordProxy>;

                same use case but like for list , for e.g edges

                .............................................................................................

                getOrCreateLinkedRecord(
                  name: string,
                  typeName: string,
                  arguments?: ?Object,
                ): RecordProxy;

                .............................................................................................

                getType(): string;

                .............................................................................................

                getValue(name: string, arguments?: ?Object): mixed;

                .............................................................................................

                setLinkedRecord(
                  record: RecordProxy,
                  name: string,
                  arguments?: ?Object,
                ): RecordProxy;

                .............................................................................................


                setLinkedRecords(
                  records: Array<?RecordProxy>,
                  name: string,
                  arguments?: ?Object,
                ): RecordProxy;

                .............................................................................................

                setValue(value: mixed, name: string, arguments?: ?Object): RecordProxy;


                .............................................................................................

                invalidateRecord(): void;

                }

              */


              // const bookRecord = store.get("1");
              // console.log(bookRecord)

              // console.log("............................getDataID()")
              // console.log(bookRecord?.getDataID())

              // console.log("............................getType()")
              // console.log(bookRecord?.getType())   // what's the type of this in grpahql


              // console.log("............................getValue()")  // the value of this type' field like here title etc  (only scalar)
              // console.log(bookRecord?.getValue("title"))
              // //console.log(bookRecord?.getValue("author"))  // will give error for these use getLinkedRecord
              // console.log(bookRecord?.getValue("id"))


              // console.log("............................getLinkedRecord()")    // for author and some time some take argument so for this
              // console.log(bookRecord?.getLinkedRecord("author"))   // since return time record proxy so use these function again.



              // other are like setting for these check doc if require simple hi hai bro




              /*

                ConnectionHandler (like in pagination system )  [don't doing now] [See doc copied from there only]

                This interface mainly deals with manipulating pagination connections.
                 Relay runtime provides a module corresponding to it

                ConnectionHandler is a utility module exposed by relay-runtime that aids in the 
                manipulation of connections. ConnectionHandler exposes the following interface:

                interface ConnectionHandler {

                  getConnection(
                    record: RecordProxy,
                    key: string,
                    filters?: ?Object,
                  ): ?RecordProxy,
                  createEdge(
                    store: RecordSourceProxy,
                    connection: RecordProxy,
                    node: RecordProxy,
                    edgeType: string,
                  ): RecordProxy,
                  insertEdgeBefore(
                    connection: RecordProxy,
                    newEdge: RecordProxy,
                    cursor?: ?string,
                  ): void,
                  insertEdgeAfter(
                    connection: RecordProxy,
                    newEdge: RecordProxy,
                    cursor?: ?string,
                  ): void,
                  deleteNode(connection: RecordProxy, nodeID: string): void
                }

                .............................................................................................

                getConnection(record: RecordProxy, key: string, filters?: ?Object)


                Given a record and a connection key, and optionally a set of filters, 
                getConnection retrieves a RecordProxy that represents a connection that was annotated 
                with a @connection directive.

                First, let's take a look at a plain connection:

                fragment FriendsFragment on User {
                  friends(first: 10) {
                    edges {
                      node {
                        id
                      }
                    }
                  }
                }

                Accessing a plain connection field like this is the same as other regular fields:

                // The `friends` connection record can be accessed with:

                const user = store.get(userID);
                const friends = user && user.getLinkedRecord('friends');

                // Access fields on the connection:

                const edges = friends && friends.getLinkedRecords('edges');

                When using usePaginationFragment, we usually annotate the actual connection 
                field with @connection to tell Relay which part needs to be paginated:


                fragment FriendsFragment on User {
                  friends(first: 10, orderby: "firstname") @connection(
                    key: "FriendsFragment_friends",
                  ) {
                    edges {
                      node {
                        id
                      }
                    }
                  }
                }

                For connections like the above, ConnectionHandler helps us find the record:

                import {ConnectionHandler} from 'relay-runtime';

                // The `friends` connection record can be accessed with:

                const user = store.get(userID);

                const friends = ConnectionHandler.getConnection(
                user,                        // parent record
                'FriendsFragment_friends',   // connection key
                {orderby: 'firstname'}       // 'filters' that is used to identify the connection
                );


                // Access fields on the connection:

                const edges = friends.getLinkedRecords('edges');

                
                
                .............................................................................................


                Edge creation and insertion
                
                -> this can be use in automation-rule page for adding rule after saving rule without refetch.

                createEdge(store: RecordSourceProxy, connection: RecordProxy, node: RecordProxy, edgeType: string)

                Creates an edge given a store, a connection, the edge node, and the edge type.

                insertEdgeBefore(connection: RecordProxy, newEdge: RecordProxy, cursor?: ?string)

                Given a connection, inserts the edge at the beginning of the connection, 
                or before the specified cursor.

                insertEdgeAfter(connection: RecordProxy, newEdge: RecordProxy, cursor?: ?string)


                Given a connection, inserts the edge at the end of the connection, or after the specified cursor.

                Example
                const user = store.get(userID);
                const friends = ConnectionHandler.getConnection(user, 'FriendsFragment_friends');
                const newFriend = store.get(newFriendId);
                const edge = ConnectionHandler.createEdge(store, friends, newFriend, 'UserEdge');

                // No cursor provided, append the edge at the end.
                ConnectionHandler.insertEdgeAfter(friends, edge);

                // No cursor provided, insert the edge at the front:
                ConnectionHandler.insertEdgeBefore(friends, edge);

                deleteNode(connection: RecordProxy, nodeID: string): void
                Given a connection, deletes any edges whose node id matches the given id.

                Example
                const user = store.get(userID);
                const friends = ConnectionHandler.getConnection(user, 'FriendsFragment_friends');
                ConnectionHandler.deleteNode(friends, idToDelete);
              */

                
            },
            onError: (err) => console.error(err),
          });
        }}
      >
        <label htmlFor="fname">Book id:</label>
        <input type="number" id="fname" placeholder="Type Book id" /> <br></br>
        <label htmlFor="fname">Book title:</label>
        <input type="text" id="fname" placeholder="Type Book title" /> <br></br>
        <label htmlFor="fname">This author id:</label>
        <input type="text" id="fname" placeholder="Type Book title" /> <br></br>
        <label htmlFor="fname">Author firstname:</label>
        <input type="text" id="fname" placeholder="Type Book title" /> <br></br>
        <label htmlFor="fname">Author secondname:</label>
        <input type="text" id="fname" placeholder="Type Book title" /> <br></br>
        <input type="submit" />
      </form>
    </React.Suspense>
  );
}

export default Approot;
