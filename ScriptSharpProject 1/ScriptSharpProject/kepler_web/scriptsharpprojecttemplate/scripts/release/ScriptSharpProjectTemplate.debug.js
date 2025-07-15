//! ScriptSharpProjectTemplate.debug.js
//

(function() {

Type.registerNamespace('Kepler.ScriptSharpProjectTemplate');

////////////////////////////////////////////////////////////////////////////////
// Kepler.ScriptSharpProjectTemplate.Class1

Kepler.ScriptSharpProjectTemplate.Class1 = function Kepler_ScriptSharpProjectTemplate_Class1() {
    /// <field name="_elmDiv" type="Object" domElement="true">
    /// </field>
    /// <field name="_box2" type="Object" domElement="true">
    /// </field>
    /// <field name="_box3" type="Object" domElement="true">
    /// </field>
    this._createElement();
    this._attachEvent();
}
Kepler.ScriptSharpProjectTemplate.Class1.prototype = {
    _elmDiv: null,
    _box2: null,
    _box3: null,
    
    _onDragOverEvent: function Kepler_ScriptSharpProjectTemplate_Class1$_onDragOverEvent(e) {
        /// <param name="e" type="ElementEvent">
        /// </param>
        e.preventDefault();
    },
    
    _onDropEvent: function Kepler_ScriptSharpProjectTemplate_Class1$_onDropEvent(e) {
        /// <param name="e" type="ElementEvent">
        /// </param>
        e.target.appendChild(this._elmDiv);
    },
    
    _onDragStartEvent: function Kepler_ScriptSharpProjectTemplate_Class1$_onDragStartEvent(e) {
        /// <param name="e" type="ElementEvent">
        /// </param>
    },
    
    _attachEvent: function Kepler_ScriptSharpProjectTemplate_Class1$_attachEvent() {
        this._elmDiv.addEventListener('dragstart', ss.Delegate.create(this, this._onDragStartEvent), false);
        this._box2.addEventListener('dragover', ss.Delegate.create(this, this._onDragOverEvent), false);
        this._box3.addEventListener('dragover', ss.Delegate.create(this, this._onDragOverEvent), false);
        this._box2.addEventListener('drop', ss.Delegate.create(this, this._onDropEvent), false);
        this._box3.addEventListener('drop', ss.Delegate.create(this, this._onDropEvent), false);
    },
    
    _createElement: function Kepler_ScriptSharpProjectTemplate_Class1$_createElement() {
        this._elmDiv = document.createElement('div');
        this._elmDiv.setAttribute('class', 'box1');
        this._elmDiv.setAttribute('draggable', 'true');
        document.body.appendChild(this._elmDiv);
        this._box2 = document.createElement('div');
        this._box2.setAttribute('class', 'box2');
        document.body.appendChild(this._box2);
        this._box3 = document.createElement('div');
        this._box3.setAttribute('class', 'box3');
        document.body.appendChild(this._box3);
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
