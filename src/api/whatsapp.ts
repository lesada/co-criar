function whatsAppApi(
  message = 'Olá, gostaria de saber mais sobre os serviços da empresa.',
  phone = '5551984386892',
): string {
  return `http://api.whatsapp.com/send?phone=${phone}&text=${message}`;
}

export default whatsAppApi;
