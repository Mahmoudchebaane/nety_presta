{extends file='checkout/_partials/steps/checkout-step.tpl'}

{block name='step_content'}

  {hook h='displayPaymentTop'}

  <div class="payment-options">
    {foreach from=$payment_options item="module_options"}     
      {foreach from=$module_options item="option"}        
        <div>
          <div id="{$option.id}-container" class="payment-option clearfix">
            {* This is the way an option should be selected when Javascript is enabled *}
            <span class="custom-radio pull-xs-left">
           
              <input
                class="ps-shown-by-js {if $option.binary} binary {/if}"
                id="{$option.id}"
                data-module-name="{$option.module_name}"
                name="payment-option"
                type="radio"
                required
                {if $option.module_name == "ps_cashondelivery"} checked {/if}
                {if $selected_payment_option == $option.id} checked {/if}
              >
              <span></span>
            </span>
            {* This is the way an option should be selected when Javascript is disabled *}
            <form method="GET" class="ps-hidden-by-js">
              {if $option.id === $selected_payment_option}
                {l s='Selected' d='Shop.Theme.Checkout'}
              {else}
                <button class="ps-hidden-by-js" type="submit" name="select_payment_option" value="{$option.id}">
                  {l s='Choose' d='Shop.Theme.Actions'}
                </button>
              {/if}
            </form>

            <label for="{$option.id}">
              <span>{$option.call_to_action_text}</span>
              {if $option.logo}
                <img class="img-fluid" src="{$option.logo}">
              {/if}
            </label>
            {if $option.additionalInformation}
              <div
                id="{$option.id}-additional-information"
                class="js-additional-information definition-list additional-information{if $option.id != $selected_payment_option} ps-hidden {/if}" >
                {$option.additionalInformation nofilter}
              </div>
            {/if}
          </div>
        </div>

       

        <div
          id="pay-with-{$option.id}-form"
          class="js-payment-option-form {if $option.id != $selected_payment_option} ps-hidden {/if}"
        >
          {if $option.form}
            {$option.form nofilter}
          {else}
            <form id="payment-form" method="POST" action="{$option.action nofilter}">
              {foreach from=$option.inputs item=input}
                <input type="{$input.type}" name="{$input.name}" value="{$input.value}">
              {/foreach}
              <button style="display:none" id="pay-with-{$option.id}" type="submit"></button>
            </form>
          {/if}
        </div>
      {/foreach}
    {foreachelse}
      <p class="alert alert-danger">{l s='Unfortunately, there are no payment method available.' d='Shop.Theme.Checkout'}</p>
    {/foreach}
  </div>


  {if $show_final_summary}
    {include file='checkout/_partials/order-final-summary.tpl'}
  {/if}
  <div class="pr-30 mb-20">
    {if $conditions_to_approve|count}
      <p class="ps-hidden-by-js">
        {* At the moment, we're not showing the checkboxes when JS is disabled
           because it makes ensuring they were checked very tricky and overcomplicates
           the template. Might change later.
        *}
        {l s='By confirming the order, you certify that you have read and agree with all of the conditions below:' d='Shop.Theme.Checkout'}
      </p>

      <form id="conditions-to-approve" method="GET">
          {foreach from=$conditions_to_approve item="condition" key="condition_name"}
            <div>
              <div class="pull-xs-left">
                <span class="custom-checkbox">
                  <input  id    = "conditions_to_approve[{$condition_name}]"
                          name  = "conditions_to_approve[{$condition_name}]"
                          required
                          type  = "checkbox"
                          value = "1"
                          class = "ps-shown-by-js"
                  >
                  <span><i class="material-icons checkbox-checked">&#xE5CA;</i></span>
                  {* <label class="js-terms" for="conditions_to_approve[{$condition_name}]">
                    {$condition nofilter}
                  </label> *}
                 <a href="https://preprod.nety.tn/fr/content/3-conditions-générales" target="_blank" id="cta-terms-and-conditions-0">  {l s='I agree to the terms of service and will adhere to them unconditionally.' d='Shop.Theme.Checkout'}</a> 
                  </label>
                </span>
              </div>
            </div>
          {/foreach}
      </form>
    {/if}
    {if $show_final_summary}
      <article class="alert alert-warning js-alert-payment-conditions" role="alert" data-alert="danger">
        {l
          s='Please make sure you\'ve chosen a [1]payment method[/1] and accepted the [2]terms and conditions[/2].'
          sprintf=[
            '[1]' => '<a href="#checkout-payment-step">',
            '[/1]' => '</a>',
            '[2]' => '<a href="#conditions-to-approve">',
            '[/2]' => '</a>'
          ]
          d='Shop.Theme.Checkout'
        }
      </article>
    {/if}
  </div>

  

  <div id="payment-confirmation">
    <div class="ps-shown-by-js">
      <button type="submit" {if !$selected_payment_option} disabled {/if} class="continue btn btn-primary ">
        {* {l s='Order with an obligation to pay' d='Shop.Theme.Checkout'} *}
        {l s='Confirm your order' d='Shop.Theme.Checkout'}

      </button>
    </div>
    <div class="ps-hidden-by-js">
      {if $selected_payment_option and $all_conditions_approved}
        <label for="pay-with-{$selected_payment_option}">
        {* {l s='Order with an obligation to pay' d='Shop.Theme.Checkout'} *}
        {l s='Confirm your order' d='Shop.Theme.Checkout'}
        </label>
      {/if}
    </div>
  </div>

  {hook h='displayPaymentByBinaries'}

  {* <div class="modal fade" id="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="js-modal-content"></div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="js-modal-content"></div>
      </div>
    </div>
  </div> *}


  
{/block}
