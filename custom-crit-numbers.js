/*
Made for a magic weapon that Crits on 7's and 20's.
*/
//Get needed values
let dexMod = actor.getRollData().abilities.dex.mod;
let prof = actor.getRollData().attributes.prof;
//Define Attack Roll formula
let formula = '1d20+' + dexMod + '+' +prof;
//perform Rolls and form tooltips
let atkRoll1 = new Roll(formula).roll();
let tooltip1 = await atkRoll1.getTooltip();
let atkRoll2 = new Roll(formula).roll();
let tooltip2 = await atkRoll2.getTooltip();
//check for Attak Crits on the rolled d (not including modifiers) (7 and 20)
let crit1 = '';
let crit2 = '';
if (atkRoll1.results[0] == 7 || atkRoll1.results[0] == 20){
   crit1 = 'style="color:green; filter: sepia(0.5) hue-rotate(60deg)"';
}
if (atkRoll2.results[0] == 7 || atkRoll2.results[0] == 20){
   crit2 = 'style="color:green; filter: sepia(0.5) hue-rotate(60deg)"';
}

let template = 
'<div class="dice-roll red-dual">'+
   '<div class="br5e-roll-label">'+ 'Attack'+ '</div>'+
   '<div class="dice-result">'+
      '<div class="dice-formula dice-tooltip">' + formula + '</div>'+
      '<div class="dice-row">'+
         '<div class="tooltip dual-left dice-row-item"'+ crit1  +'>'+ tooltip1 +'</div>'+
         '<div class="tooltip dual-right dice-row-item"'+ crit2  +'>'+ tooltip2 +'</div>'+	
      '</div>'+
      '<div class="dice-row">'+
         '<h4 class="dice-total dice-row-item"'+ crit1  +'>'+atkRoll1.total+'</h4>'+
         '<h4 class="dice-total dice-row-item"'+ crit2  +'>'+atkRoll2.total+'</h4>'+
      '</div>'+
    '</div>'+
'</div>';




let chatData = {

    content: template,

}
ChatMessage.create(chatData);
