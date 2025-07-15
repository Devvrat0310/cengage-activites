
using System;
using System.Collections.Generic;
using System.Linq;
using jQueryApi;
using System.Html;

namespace Kepler.ScriptSharpProjectTemplate
{

    public class Class1
    {

        public Class1()
        {
            CreateElement();
            AttachEvent();

        }
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

