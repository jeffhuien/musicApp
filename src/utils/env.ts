import _ from "lodash";
const env: any = _.cloneDeep(import.meta.env);

Object.entries(import.meta.env as Record<string, any>).forEach(([k, v]) => {
  if (v == "true" || v == "false") env[k] = v == "true" ? true : false;
  else if (/^\d+$/.test(v)) env[k] = parseInt(v);
  else if (v == "null") env[k] = null;
  else if (v == "undefined") env[k] = undefined;
});
// console.log(env.);
export default env as ViteEnv;
