using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Html;
using System.Collections;

namespace Kepler.ScriptSharpProjectTemplate.components
{
    public class ContainerModel
    {
        private int containerCount = 0;
        private List<Element> containers;

        public ContainerModel()
        {
            containers = new List<Element>();
        }

        /// <summary>
        /// Adds new container to containers list
        /// </summary>
        /// <param name="container">The droppable container</param>
        public void UpdateContainersList(Element container)
        {
            containers.Add(container);
            containerCount = containers.Count;
        }

        /// <summary>
        /// Gets container dimensions
        /// </summary>
        /// <param name="container">The droppable container</param>
        /// <returns>Dimensions and position of the container</returns>
        public RectInfo GetContainerDimension(Element container)
        {

            Object rect = Script.Literal("({0}.getBoundingClientRect())", container);

            Dictionary res = new Dictionary();

            double x = rect.left;
            double y = rect.top;
            double width = rect.right - x;
            double height = rect.bottom - y;

            return new RectInfo
            {
                X = x,
                Y = y,
                Width = width,
                Height = height
            };
        }
}
