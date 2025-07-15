using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Html;

namespace Kepler.ScriptSharpProjectTemplate.components
{
    class DraggableContainer
    {
        private void OnDragOverEvent(ElementEvent e)
        {
            e.PreventDefault();
            // Add class
        }
        private void OnDropEvent(ElementEvent e)
        {

        }

        private void OnDragStartEvent(ElementEvent e)
        {
            //set Time out
            // e.Target.SetAttribute("class","hide");
        }

        private void AttachEvent()
        {
        }

        private void CreateElement()
        {
            Element canvasDiv = Document.CreateElement("canvas");

            canvasDiv.ClassName = "container";

            Element body = Document.QuerySelector("body");
            body.AppendChild(canvasDiv);

        }
    }

}
