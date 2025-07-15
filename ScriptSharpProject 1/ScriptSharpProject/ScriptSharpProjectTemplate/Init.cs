// Page1.cs
//

using System;
using System.Collections.Generic;
using System.Html;
using System.Runtime.CompilerServices;
using jQueryApi;

namespace Kepler.ScriptSharpProjectTemplate
{
    [GlobalMethods]
    internal static class Init
    {
        ///<summary>
        ///To be loaded when the document is ready: Loading the XML
        ///</summary>

        static Init()
        {
            jQuery.OnDocumentReady( delegate()
            {
                new Class1();
            } );
        }
    }
}