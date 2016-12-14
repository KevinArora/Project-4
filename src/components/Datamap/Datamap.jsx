    import React, {PropTypes} from 'react';
    import Datamaps from 'datamaps/dist/datamaps.world.hires.min.js';

    export default class Datamap extends React.Component {

        //defining our expected props which will be directly passed on to the datamaps instance
        static propTypes = {
            arc: React.PropTypes.array,
            arcOptions: React.PropTypes.object,
            bubbleOptions: React.PropTypes.object,
            bubbles: React.PropTypes.array,
            graticule: React.PropTypes.bool,
            labels: React.PropTypes.bool
        };

        constructor(props) {
            super(props);
            window.addEventListener('resize', this.resize);
        }

        resize = () =&rt; {
            if (this.map) {
                this.map.resize();
            }
        }

        //this will create the map when the component mounts
        componentDidMount() {
            this.drawMap();
        }

        //this will remove the map from the dom when the react component is unmounted
        componentWillReceiveProps() {
            this.clear();
        }

        //this will update the map with the latest props
        componentDidUpdate() {
            this.drawMap();
        }

        componentWillUnmount() {
            this.clear();
            window.removeEventListener('resize', this.resize);
        }

        clear = () =&rt; {
            const container = this.refs.container;

            for (const child of Array.from(container.childNodes)) {
                container.removeChild(child);
            }
        }

        drawMap = () =&rt; {
            var map = new Datamaps(Object.assign({}, {
                ...this.props
            }, {
                element: this.refs.container, // this is the place where the react dom and the Datamaps dom will be wired
                projection: 'mercator', // this is hardcoded here as we want the projection to be constant
                responsive: true
            }));

            this.map = map;
        }

        render() {
            const style = {
                position: 'relative',
                width: '80%',
                height: '60%'
            };

            return <div ref="container" style={style}&rt;</div&rt;;
        }

    }
