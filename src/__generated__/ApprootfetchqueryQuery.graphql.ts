/**
 * @generated SignedSource<<46a8649825b1cd34306cf9228736961b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ApprootfetchqueryQuery$variables = {};
export type ApprootfetchqueryQuery$data = {
  readonly books: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"App_detail">;
  } | null>;
};
export type ApprootfetchqueryQuery = {
  response: ApprootfetchqueryQuery$data;
  variables: ApprootfetchqueryQuery$variables;
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
    "name": "ApprootfetchqueryQuery",
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
    "name": "ApprootfetchqueryQuery",
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
    "cacheID": "7f77f4804934ab505b8b87c150081c92",
    "id": null,
    "metadata": {},
    "name": "ApprootfetchqueryQuery",
    "operationKind": "query",
    "text": "query ApprootfetchqueryQuery {\n  books {\n    ...App_detail\n    id\n  }\n}\n\nfragment App_detail on Book {\n  title\n  author {\n    id\n    firstname\n    secondname\n  }\n}\n"
  }
};
})();

(node as any).hash = "8622a73f67895dd9fde4bb1a12cf62e6";

export default node;
