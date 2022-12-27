const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const validateImageType = (value: any) => {
  if(value) {
    let type = value.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0]
    return SUPPORTED_FORMATS.includes(type)
  }
}