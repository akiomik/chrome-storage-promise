chrome.storage = {
    local: {
        get: function(keys, callback) {
            setTimeout(function() {
                callback({foo: 'bar'});
            }, 100);
        },
        set: function(items, callback) {
            setTimeout(callback, 100);
        },
        getBytesInUse: function(keys, callback) {
            setTimeout(function() {
                callback(42);
            }, 100);
        },
        remove: function(items, callback) {
            setTimeout(callback, 100);
        },
        clear: function(callback) {
            setTimeout(callback, 100);
        },
    },

    onChanged: {
        addListener: function(callback) {
            setTimeout(callback, 100);
        },
    },
};

require('../dist/chrome-storage-promise.js');

describe('chrome-storage-promise', function() {
    describe('local', function() {
        describe('.get', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.local.get('foo').then(function(items) {
                    expect(items).to.eql({foo: 'bar'});
                    done();
                });
            });

            it('calls chrome.storage.local.get with "foo"', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.local, 'get');
                chrome.storage.promise.local.get('foo').then(callback);
                assert(chrome.storage.local.get.calledWithMatch('foo'));
            });
        });

        describe('.set', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.local.set({foo: 'bar'}).then(function() {
                    done();
                });
            });

            it('calls chrome.storage.local.set with {foo: "bar"}', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.local, 'set');
                chrome.storage.promise.local.set({foo: 'bar'}).then(callback);
                assert(chrome.storage.local.set.calledWithMatch({foo: 'bar'}));
            });
        });

        describe('.getBytesInUse', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.local.getBytesInUse('foo').then(function(bytesInUse) {
                    expect(bytesInUse).to.equal(42);
                    done();
                });
            });

            it('calls chrome.storage.local.getBytesInUse with "foo"', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.local, 'getBytesInUse');
                chrome.storage.promise.local.getBytesInUse('foo').then(callback);
                assert(chrome.storage.local.getBytesInUse.calledWithMatch('foo'));
            });
        });

        describe('.remove', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.local.remove('foo').then(function() {
                    done();
                });
            });

            it('calls chrome.storage.local.remove with "foo"', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.local, 'remove');
                chrome.storage.promise.local.remove('foo').then(callback);
                assert(chrome.storage.local.remove.calledWithMatch('foo'));
            });
        });

        describe('.clear', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.local.clear().then(function() {
                    done();
                });
            });

            it('calls chrome.storage.local.clear', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.local, 'clear');
                chrome.storage.promise.local.clear().then(callback);
                assert(chrome.storage.local.clear.calledWithMatch());
            });
        });
    });

    describe('onChanged', function() {
        describe('.addListener', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.onChanged.addListener().then(function() {
                    done();
                });
            });

            it('calls chrome.storage.onChanged.addListener', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.onChanged, 'addListener');
                chrome.storage.promise.onChanged.addListener().then(callback);
                assert(chrome.storage.onChanged.addListener.calledWithMatch());
            });
        });
    });
});
