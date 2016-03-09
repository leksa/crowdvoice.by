Class(CV, 'SearchOrganizationsTab').inherits(Widget)({
    prototype : {
        init : function init(config) {
            Widget.prototype.init.call(this, config);

            this.el = this.element[0];

            var fragment = document.createDocumentFragment();
            this.data.forEach(function(organization, index) {
                this.appendChild(new CV.Card({
                    name : 'org_' + index,
                    className : '-inline-block -pl1 -pr1',
                    data : organization
                }));
                fragment.appendChild(this['org_' + index].el);
            }, this);

            this.el.appendChild(fragment);

            this.r = new CV.ResponsiveWidth({
                container : this.el,
                items : [].slice.call(this.el.querySelectorAll('.widget-card'), 0),
                minWidth : 300
            });
        },

        update : function update() {
            this.r.setup();
        },

        _activate : function _activate() {
            Widget.prototype._activate.call(this);
            this.update();
        }
    }
});
