import Zh from './zh';

export default function customTranslate(template:string, replacements:object) {
  replacements = replacements || {};

  // Translate
  template = (Zh as { [key: string]: string })[template] || template;

  // Replace
  return template.replace(/{([^}]+)}/g, function(_, key) {
    return (replacements as { [key: string]: string })[key] || '{' + key + '}';
  });
}
