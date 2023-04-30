/**
 * @generated SignedSource<<6cb437a7c6d2084aa886b8c4a44ceb10>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type bookInput = {
  author: authInput;
  id: string;
  title: string;
};
export type authInput = {
  firstname: string;
  id: string;
  secondname: string;
};
export type ApprootupdateBookQuery$variables = {
  book: bookInput;
  id: string;
};
export type ApprootupdateBookQuery$data = {
  readonly updateBook: {
    readonly " $fragmentSpreads": FragmentRefs<"App_detail">;
  } | null;
};
export type ApprootupdateBookQuery = {
  response: ApprootupdateBookQuery$data;
  variables: ApprootupdateBookQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "book"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "kind": "Variable",
    "name": "book",
    "variableName": "book"
  },
  {
    "kind": "Variable",
    "name": "bookId",
    "variableName": "id"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ApprootupdateBookQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "updateBook",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "App_detail"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ApprootupdateBookQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "updateBook",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Auth",
            "kind": "LinkedField",
            "name": "author",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "firstname",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "secondname",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "383bc85ff95fdb67042c2323ec734dd0",
    "id": null,
    "metadata": {},
    "name": "ApprootupdateBookQuery",
    "operationKind": "mutation",
    "text": "mutation ApprootupdateBookQuery(\n  $id: ID!\n  $book: bookInput!\n) {\n  updateBook(bookId: $id, book: $book) {\n    ...App_detail\n    id\n  }\n}\n\nfragment App_detail on Book {\n  title\n  author {\n    id\n    firstname\n    secondname\n  }\n}\n"
  }
};
})();

(node as any).hash = "a434ac08907ae5df34adf95d93b1e470";

export default node;
