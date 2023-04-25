/**
 * @generated SignedSource<<504a37a1bcacb0991928e6de18209b8d>>
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
    readonly id: string;
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
          (v3/*: any*/),
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
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "edff558fa8f6c23b4aec4a2cd111d401",
    "id": null,
    "metadata": {},
    "name": "ApprootupdateBookQuery",
    "operationKind": "mutation",
    "text": "mutation ApprootupdateBookQuery(\n  $id: ID!\n  $book: bookInput!\n) {\n  updateBook(bookId: $id, book: $book) {\n    id\n    ...App_detail\n  }\n}\n\nfragment App_detail on Book {\n  title\n}\n"
  }
};
})();

(node as any).hash = "aecc280cb9a2b888276e1b2838ab4522";

export default node;
