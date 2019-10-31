'use strict';

goog.provide('Blockly.Blocks.StudentBlocks');

Blockly.Blocks['fracao_tras'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("De 1/");
    this.appendDummyInput()
        .appendField("de passo para trás");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fracao_frente'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("De 1/");
    this.appendDummyInput()
        .appendField("de passo para frente");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['passo_frente'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dar um passo para frente");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['quando_comecar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Quando começar");
    this.appendStatementInput("statements")
        .setCheck(null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['quando_apertar_botao'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Quando apertar o botão");
    this.appendStatementInput("statements")
        .setCheck(null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['virar_esquerda_n'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Vire")
        .appendField(new Blockly.FieldAngle(60), "DEGREES")
        .appendField("para a esquerda");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['virar_direita_n'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Vire")
        .appendField(new Blockly.FieldAngle(60), "DEGREES")
        .appendField("para a direita");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['passo_tras'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dar um passo para trás");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['virar_esquerda'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Virar para a esquerda");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['virar_direita'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Virar para a direita");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['led_vermelho'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["ligar","ligar"], ["desligar","desligar"]]), "valor")
        .appendField("o LED vermelho");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['led_verde'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["ligar","ligar"], ["desligar","desligar"]]), "valor")
        .appendField("o LED verde");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['desca_caneta'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Descer caneta");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sobe_caneta'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Subir caneta");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['distancia'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("distância lida");
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['botao_pressionado'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("botão pressionado");
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['buzzer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzina");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['repita_vezes'] = {
  init: function() {
    this.appendValueInput("TIMES")
        .setCheck("Number")
        .appendField("Repita");
    this.appendDummyInput()
        .appendField("vezes");
    this.appendStatementInput("STAT")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['enquanto'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Enquanto");
    this.appendStatementInput("STAT")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['repita_ate'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Repita até");
    this.appendStatementInput("STAT")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['espere'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Espere um segundo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
