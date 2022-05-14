    const masks = {
    cpf (value) {
      return value
        .replace(/\D+/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    },

    date (value) {
        return value
          .replace(/\D+/g, '')
          .replace(/(\d{2})(\d)/, '$1/$2')
          .replace(/(\/\d{2})(\d)/, '$1/$2')
          .replace(/(\/\d{4})\d+?$/, '$1')
      },

      cep (value) {
        return value
          .replace(/\D+/g, '')
          .replace(/(\d{5})(\d)/, '$1-$2')
          .replace(/(-\d{3})\d+?$/, '$1')
      },


  

}

export deafaut masks

