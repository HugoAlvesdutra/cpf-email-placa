export const tipos = {
  CPF: 'CPF',
  EMAIL: 'EMAIL',
  PLACA: 'PLACA'
}

export const idenficadorTipoEntrada = (entrada) => {
  if (!isNaN(entrada) && entrada.length === 11) {
    const validadeCPF = validarCPF(entrada);
    return {
      tipoEntrada: 'CPF',
      status: `Validade: ${validadeCPF}`
    }
  } else if (entrada.length === 7 && !entrada.includes(`@`)) {
    const validadePlaca = validarPlacaCarro(entrada);
    return {
      tipoEntrada: 'Placa veicular',
      status: `Validade: ${validadePlaca}`
    }
  } else if (entrada.split('@').length === 2) {
    const validadeEmail = validarEmail(entrada);
    return {
      tipoEntrada: 'E-mail',
      status: `Validade: ${validadeEmail}`
    }
  } else {
    return {
      tipoEntrada: 'Entrada não identificada',
      status: 'Indeterminado'
    }
  }
}

const validarPlacaCarro = (placa) => {
  const placaDesmontada = placa.split('');
  if (isNaN(placaDesmontada[0]) && isNaN(placaDesmontada[1]) && isNaN(placaDesmontada[2]) && !isNaN(placaDesmontada[3]) && !isNaN(placaDesmontada[4]) && !isNaN(placaDesmontada[5]) && !isNaN(placaDesmontada[6])) {
    return true;
  }
  return false;
}

const validarCPF = (cpf) => {
  cpf = cpf.replace(/\./g, "");
  cpf = cpf.replace("-", "");

  // Elimina CPJFSs invalidos conhecidos
  if (cpf === '11111111111' || cpf === '22222222222' || cpf === '33333333333' ||
    cpf === '44444444444' || cpf === '55555555555' || cpf === '66666666666' ||
    cpf === '77777777777' || cpf === '88888888888' || cpf === '99999999999')
    return false;

  let i;
  let cpfValido = true;
  const c = cpf.substr(0, 9);
  const dv = cpf.substr(9, 2);
  let d1 = 0;

  for (i = 0; i < 9; i++) {
    d1 += parseInt(c.charAt(i)) * (10 - i);
  }
  if (d1 === 0) {
    cpfValido = false;
  }
  d1 = 11 - (d1 % 11);
  if (d1 > 9) {
    d1 = 0;
  }
  if (parseInt(dv.charAt(0)) !== d1) {
    cpfValido = false;
  }
  d1 *= 2;
  for (i = 0; i < 9; i++) {
    d1 += parseInt(c.charAt(i)) * (11 - i);
  }
  d1 = 11 - (d1 % 11);
  if (d1 > 9) {
    d1 = 0;
  }
  if (parseInt(dv.charAt(1)) !== d1) {
    cpfValido = false;
  }
  if (cpfValido === false) {
    return false;
  } else {
    return true;
  }
}

const validarEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
