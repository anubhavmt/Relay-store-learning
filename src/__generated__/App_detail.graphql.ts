/**
 * @generated SignedSource<<05d2502e2399f38f0c67ff2aa5bc3e51>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type App_detail$data = {
  readonly title: string;
  readonly " $fragmentType": "App_detail";
};
export type App_detail$key = {
  readonly " $data"?: App_detail$data;
  readonly " $fragmentSpreads": FragmentRefs<"App_detail">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "App_detail",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Book",
  "abstractKey": null
};

(node as any).hash = "3a79ea341528cf45e1c0534d627acd94";

export default node;
