

/****** Object:  Table [dbo].[mytable]    Script Date: 4/8/2023 8:35:22 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[mytable](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[end_year] [int] NULL,
	[intensity] [int] NULL,
	[sector] [varchar](200) NULL,
	[topic] [varchar](200) NULL,
	[insight] [varchar](500) NULL,
	[url] [varchar](1000) NULL,
	[region] [varchar](50) NULL,
	[start_year] [int] NULL,
	[impact] [int] NULL,
	[added] [datetime] NULL,
	[published] [datetime] NULL,
	[country] [varchar](50) NULL,
	[relevance] [int] NULL,
	[pestle] [varchar](50) NULL,
	[source] [varchar](200) NULL,
	[title] [varchar](500) NULL,
	[likelihood] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


