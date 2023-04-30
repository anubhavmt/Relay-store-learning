/**
 * @generated SignedSource<<90a407197f7b0623fbf6d869a8862b48>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ApprootQuery$variables = {};
export type ApprootQuery$data = {
  readonly books: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"App_detail">;
  } | null>;
};
export type ApprootQuery = {
  response: ApprootQuery$data;
  variables: ApprootQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ApprootQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "books",
        "plural": true,
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
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ApprootQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "books",
        "plural": true,
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
              (v0/*: any*/),
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
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5779ef6e42cddb013068ad19b2c3972e",
    "id": null,
    "metadata": {},
    "name": "ApprootQuery",
    "operationKind": "query",
    "text": "query ApprootQuery {\n  books {\n    ...App_detail\n    id\n  }\n}\n\nfragment App_detail on Book {\n  title\n  author {\n    id\n    firstname\n    secondname\n  }\n}\n"
  }
};
})();

(node as any).hash = "867372aaae776ea7a106594d996912b5";

export default node;
