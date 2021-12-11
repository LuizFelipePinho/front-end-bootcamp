import React from 'react' ;


export default function Carrinho()

  {
    return ( 
        <div className = "checkout" >
         <section class = "py-5" >
                <div class = "container px-4 px-lg-5 my-5" >
                <div class = "row" >
                <div class = "col-md-4 order-md-2 mb-4" >
                    <h4 class = "d-flex justify-content-between align-items-center mb-3" >
                    <span class = "text-muted" > Seu carrinho </span>
                    <span class = "badge badge-secondary badge-pill" > 3 </span>
                    </h4>
                    <ul class = "list-group mb-3" >
                    <li class = "list-group-item d-flex justify-content-between lh-condensed" >
                        <div>
                        <h6 class = "my-0" > Nome do produto </h6>
                        <small class = "text-muted" > Breve descrição </small>
                        </div>
                        <span class = "text-muted" > $ 12 </span>
                    </li>
                    <li class = "list-group-item d-flex justify-content-between lh-condensed" >
                        <div>
                        <h6 class = "my-0" > Segundo produto </h6>
                        <small class = "text-muted" > Breve descrição </small>
                        </div>
                        <span class = "text-muted" > $ 8 </span>
                    </li>
                    <li class = "list-group-item d-flex justify-content-between lh-condensed" >
                        <div>
                        <h6 class = "my-0" > Terceiro item </h6>
                        <small class = "text-muted" > Breve descrição </small>
                        </div>
                        <span class = "text-muted" > $ 5 </span>
                    </li>
                    <li class = "list-group-item d-flex justify-content-between bg-light" >
                        <div class = "text-success" >
                        <h6 class = "my-0" > Código promocional </h6>
                        <small> EXAMPLECODE </small>
                        </div>
                        <span class = "text-success" > - $ 5 </span>
                    </li>
                    <li class = "list-group-item d-flex justify-content-between" >
                        <span> Total ( USD ) </span> 
                        <strong> R$ 20 </strong>
                    </li>
                    </ul>
                    <form class = "card p-2" >
                    <div class = "input-group" >
                        <input type = "text" class = "form-control me-2" placeholder = "Código promocional" />
                        <div class = "input-group-append" >
                        <button type = "button" class = "btn btn-dark px-4 rounded-pill" > Resgatar </button>
                        </div>
                    </div>
                    </form>
                </div>
                <div class = "col-md-8 order-md-1" >
                    <h4 class = "mb-3" > Endereço de cobrança </h4>
                    <form class = "needs-validation" novalidate>
                    <div class = "row" >
                        <div class = "col-md-6 mb-3" >
                        <label for = "firstName" class = "form-label" > Nome </label>
                        <input type = "text" class = "form-control" id = "firstName" placeholder = "" value = "" obrigatório />
                        <div class = "invalid-feedback" >
                            O primeiro nome válido é obrigatório.
                        </div>
                        </div>
                        <div class = "col-md-6 mb-3" >
                        <label for = "lastName" class = "form-label" > Sobrenome </label>
                        <input type = "text" class = "form-control" id = "lastName" placeholder = "" value = "" obrigatório />
                        <div class = "invalid-feedback" >
                            É necessário um sobrenome válido.
                        </div>
                        </div>
                    </div>
                    <div class = "mb-3" >
                        <label for = "username" class = "form-label" > Nome de usuário </label>
                        <div class = "input-group" >
                        <div class = "input-group-prepend" >
                            <span class = "input-group-text" > @ </span>
                        </div>
                        <input type = "text" class = "form-control" id = "username" placeholder = "Username" obrigatório />
                        <div class = "invalid-feedback" >
                            Seu nome de usuário é obrigatório.
                        </div>
                        </div>
                    </div>
                    <div class = "mb-3" >
                        <label for = "email" class = "form-label" > Email <span class = "text-muted" > ( Opcional ) </span> </label>
                        <input type = "email" class = "form-control" id = "email" placeholder = "you@example.com" />
                        <div class = "invalid-feedback" >
                        Por favor, insira um endereço de e-mail válido para atualizações de envio.
                        </div>
                    </div>
                    <div class = "mb-3" >
                        <label for = "address" class = "form-label" > Endereço </label>
                        <input type = "text" class = "form-control" id = "address" placeholder = "1234 Main St" obrigatório />
                        <div class = "invalid-feedback" >
                        Favor inserir seu endereço de entrega.
                        </div>
                    </div>
                    <div class = "mb-3" >
                        <label for = "address2" class = "form-label" > Endereço 2 <span class = "text-muted" > ( Opcional ) </span> </label>
                        <input type = "text" class = "form-control" id = "address2" placeholder = "Apartamento ou suíte" />
                    </div>
                    <div class = "row" >
                        <div class = "col-md-5 mb-3" >
                        <label for = "country" class = "form-label" > País </label>
                        <select class = "form-select d-block w-100" id = "country" obrigatório>
                            <option value = "" > Escolha ... </option>
                            <option> Estados Unidos </option>
                        </select>
                        <div class = "invalid-feedback" >
                            Selecione um país válido.
                        </div>
                        </div>
                        <div class = "col-md-4 mb-3" >
                        <label for = "state" class = "form-label" > Estado </label>
                        <select class = "form-select d-block w-100" id = "state" obrigatório>
                            <option value = "" > Escolha ... </option>
                            <option> Califórnia </option>
                        </select>
                        <div class = "invalid-feedback" >
                            Forneça um estado válido.
                        </div>
                        </div>
                        <div class = "col-md-3 mb-3" >
                        <label for = "zip" class = "form-label" > Zip </label>
                        <input type = "text" class = "form-control" id = "zip" placeholder = "" obrigatório />
                        <div class = "invalid-feedback" >
                            O código postal é obrigatório.
                        </div>
                        </div>
                    </div>
                    <hr class = "mb-4" />
                    <div class = "form-check" >
                        <input type = "checkbox" class = "form-check-input" id = "same-address" />
                        <label class = "form-check-label" for = "same-address" > O endereço de entrega é igual ao meu endereço de cobrança </label>
                    </div>
                    <div class = "form-check" >
                        <input type = "checkbox" class = "form-check-input" id = "save-info" />
                        <label class = "form-check-label" for = "save-info" > Salve essas informações para a próxima vez </label>
                    </div>
                    <hr class = "mb-4" />
                    <h4 class = "mb-3" > Pagamento </h4>
                    <div class = "d-block my-3" >
                        <div class = "form-check" >
                        <input id = "credit" name = "paymentMethod" type = "radio" class = "form-check-input" verificado obrigatório />
                        <label class = "form-check-label" for = "credit" > Cartão de crédito </label>
                        </div>
                        <div class = "form-check" >
                        <input id = " debit " name = "paymentMethod" type = "radio" class = "form-check-input" obrigatório />
                        <label class = "form-check-label" for = "debit" > Cartão de débito </label>
                        </div>
                        <div class = "form-check" >
                        <input id = "paypal" name = "paymentMethod" type = "radio" class = "form-check-input" obrigatório />
                        <label class = "form-check-label" for = "paypal" > Paypal </label>
                        </div>
                    </div>
                    <div class = "row" >
                        <div class = "col-md-6 mb-3" >
                        <label for = "cc-name" class = "form-label" > Nome no cartão </label>
                        <input type = "text" class = "form-control" id = "cc-name" placeholder = "" obrigatório />
                        <small class = "text-muted" > Nome completo conforme exibido no cartão </small>
                        <div class = "invalid-feedback" >
                            Nome no cartão é obrigatório
                        </div>
                        </div>
                        <div class = "col-md-6 mb-3" >
                        <label for = "cc-number" class = "form-label" > Número do cartão de crédito </label>
                        <input type = "text" class = "form-control" id = "cc-number" placeholder = "" obrigatório />
                        <div class = "invalid-feedback" >
                            O número do cartão de crédito é obrigatório
                        </div>
                        </div>
                    </div>
                    <div class = "row" >
                        <div class = "col-md-3 mb-3" >
                        <label for = "cc-expiration" class = "form-label" > Expiração </label>
                        <input type = "text" class = "form-control" id = "cc-expiration" placeholder = "" obrigatório />
                        <div class = "invalid-feedback" >
                            Data de expiração necessária
                        </div>
                        </div>
                        <div class = "col-md-3 mb-3" >
                        <label for = "cc-expiration" class = "form-label" > CVV </label>
                        <input type = "text" class = "form-control" id = "cc-cvv" placeholder = "" obrigatório />
                        <div class = "invalid-feedback" >
                            Código de segurança necessário
                        </div>
                        </div>
                    </div>
                    <hr class = "mb-4" />
                    <button class = "btn btn-dark px-4 rounded-pill" type = "button" > Fazer pedido </button>
                    </form>
                </div>
                </div>
            </div>
            </section>
         
        </div>
      
    )
}

