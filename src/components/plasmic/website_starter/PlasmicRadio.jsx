// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dYGU7pEm8E2XqaQSmkn1DQ
// Component: iE6XYPOQkve8
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  renderPlasmicSlot
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { BaseRadio } from "@plasmicpkgs/react-aria/skinny/registerRadio";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_tailwind_3_4_colors_css from "../library_tailwind_3_4_color_tokens/plasmic.module.css"; // plasmic-import: 5ZtnypMovRHeeP3YTdPCYL/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: dYGU7pEm8E2XqaQSmkn1DQ/projectcss
import sty from "./PlasmicRadio.module.css"; // plasmic-import: iE6XYPOQkve8/css

createPlasmicElementProxy;

export const PlasmicRadio__VariantProps = new Array();

export const PlasmicRadio__ArgProps = new Array(
  "value",
  "label",
  "autoFocus",
  "disabled",
  "ariaLabel"
);

const $$ = {};

function PlasmicRadio__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const [$ccVariants, setDollarCcVariants] = React.useState({
    selected: false,
    hovered: false,
    pressed: false,
    focused: false,
    focusVisible: false,
    disabled: false,
    readonly: false
  });
  const updateVariant = React.useCallback(changes => {
    setDollarCcVariants(prev => {
      if (!Object.keys(changes).some(k => prev[k] !== changes[k])) {
        return prev;
      }
      return { ...prev, ...changes };
    });
  }, []);
  return (
    <BaseRadio
      data-plasmic-name={"ariaRadio"}
      data-plasmic-override={overrides.ariaRadio}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      autoFocus={args.autoFocus}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_tailwind_3_4_colors_css.plasmic_tokens,
        plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens,
        sty.ariaRadio
      )}
      isDisabled={args.disabled}
      plasmicUpdateVariant={updateVariant}
      value={args.value}
    >
      <div className={classNames(projectcss.all, sty.freeBox__uyeHi)}>
        <div className={classNames(projectcss.all, sty.freeBox__elrTn)} />
      </div>
      {renderPlasmicSlot({
        defaultContents: "Option",
        value: args.label
      })}
    </BaseRadio>
  );
}

const PlasmicDescendants = {
  ariaRadio: ["ariaRadio"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicRadio__ArgProps,
          internalVariantPropNames: PlasmicRadio__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRadio__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaRadio") {
    func.displayName = "PlasmicRadio";
  } else {
    func.displayName = `PlasmicRadio.${nodeName}`;
  }
  return func;
}

export const PlasmicRadio = Object.assign(
  // Top-level PlasmicRadio renders the root element
  makeNodeComponent("ariaRadio"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicRadio
    internalVariantProps: PlasmicRadio__VariantProps,
    internalArgProps: PlasmicRadio__ArgProps
  }
);

export default PlasmicRadio;
/* prettier-ignore-end */
