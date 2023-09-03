module.exports = {
    rules: {
        'header-pattern': [
            2,
            'always',
            /^(PAP-\d{1,4})\/(feat|fix|chore): .{3,}$/,
        ],
    },
};