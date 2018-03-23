'use strict'
const listAllDatetime2ColumnsSql = 'SELECT TABLE_NAME AS tableName, COLUMN_NAME AS columnName, DATA_TYPE AS dataType, IS_NULLABLE AS isNullable FROM INFORMATION_SCHEMA.COLUMNS WHERE DATA_TYPE=\'datetime2\';'
const listAllDatetimeOffsetColumnsSql = 'SELECT TABLE_NAME AS tableName, COLUMN_NAME AS columnName, DATA_TYPE AS dataType, IS_NULLABLE AS isNullable FROM INFORMATION_SCHEMA.COLUMNS WHERE DATA_TYPE=\'datetimeoffset\';'

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.sequelize.transaction(transaction => {
			return queryInterface
				.sequelize.query(listAllDatetime2ColumnsSql, { transaction })
				.then(result => {
					result = result[0]
					const columns = []
					for (const row of result) {
						columns.push(queryInterface.changeColumn(row.tableName, row.columnName, {
							type: Sequelize.DATE,
							allowNull: row.isNullable === 'YES' ? true : false
						}, { transaction }))
					}

					return Promise.all(columns)
				});
		});
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.sequelize.transaction(transaction => {
			return queryInterface
				.sequelize.query(listAllDatetimeOffsetColumnsSql, { transaction })
				.then(result => {
					result = result[0]
					const columns = []
					for (const row of result) {
						const nullSnippet = row.isNullable === 'YES' ? 'NULL' : 'NOT NULL'
						const attribute = {}
						attribute[row.columnName] = `DATETIME2 ${nullSnippet}`;
						const changeColumnSql = queryInterface.QueryGenerator.changeColumnQuery(row.tableName, attribute);
						columns.push(queryInterface.sequelize.query(changeColumnSql, { transaction }))
					}

					return Promise.all(columns)
				});
		});
	}
};
