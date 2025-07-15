//! ScriptSharpProjectTemplate.debug.js
//

(function() {

Type.registerNamespace('Kepler.ScriptSharpProjectTemplate');

////////////////////////////////////////////////////////////////////////////////
// Kepler.ScriptSharpProjectTemplate.Class1

Kepler.ScriptSharpProjectTemplate.Class1 = function Kepler_ScriptSharpProjectTemplate_Class1() {
    this._createElement();
    this._attachEvent();
}
Kepler.ScriptSharpProjectTemplate.Class1.prototype = {
    
    _onDragOverEvent: function Kepler_ScriptSharpProjectTemplate_Class1$_onDragOverEvent(e) {
        /// <param name="e" type="ElementEvent">
        /// </param>
        e.preventDefault();
    },
    
    _onDropEvent: function Kepler_ScriptSharpProjectTemplate_Class1$_onDropEvent(e) {
        /// <param name="e" type="ElementEvent">
        /// </param>
    },
    
    _onDragStartEvent: function Kepler_ScriptSharpProjectTemplate_Class1$_onDragStartEvent(e) {
        /// <param name="e" type="ElementEvent">
        /// </param>
    },
    
    _attachEvent: function Kepler_ScriptSharpProjectTemplate_Class1$_attachEvent() {
    },
    
    _createElement: function Kepler_ScriptSharpProjectTemplate_Class1$_createElement() {
        var canvasDiv = document.createElement('canvas');
        canvasDiv.className = 'container';
        var body = document.querySelector('body');
        body.appendChild(canvasDiv);
    }
}


////////////////////////////////////////////////////////////////////////////////
// Kepler.ScriptSharpProjectTemplate._init



Kepler.ScriptSharpProjectTemplate.Class1.registerClass('Kepler.ScriptSharpProjectTemplate.Class1');
(function () {
    $(function() {
        new Kepler.ScriptSharpProjectTemplate.Class1();
    });
})();
})();

//! This script was generated using Script# v0.7.4.0
