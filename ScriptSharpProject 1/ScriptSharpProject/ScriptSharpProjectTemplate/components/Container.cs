using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Html;

namespace Kepler.ScriptSharpProjectTemplate.components
{
    class Container
    {
        Container(int ind, Object containerModel)
        {
            Element body = Document.QuerySelector("body");

            Element newContainer = Document.CreateElement("canvas");

            newContainer.ID = "container" + ind + 1;

            newContainer.ClassName = "container";

            containerModel.updateContainersList(newContainer);

            containerModel.containerCount++;

            body.appendChild(newContainer);
        }
    }
}
