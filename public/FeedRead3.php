<!DOCTYPE html>
<head>
    <title>Beanie Baby Hammock</title>
    
    <link href="/assets/application.css" media="all" rel="stylesheet" type="text/css" />
    <script src="/assets/application-a9539739ca81d501d46f3b84e78d48f0.js" type="text/javascript"></script>
    <meta content="authenticity_token" name="csrf-param" />
<meta content="BhiGPRx2yGW25PrIlDMS3hmFGG63VWZNDKEzmd/3nqo=" name="csrf-token" />
        <link id="Link1" rel="stylesheet"  href="feed.css" type="text/css" />
      
</head>
<body class="sessions">
    
    <div id="banner">
        <div id=leftLogo>
            <img alt="Beanies" src="/assets/beanies-d5075b297ac452f714abd86f99e59c72.gif" />
        </div>
        Beanie Baby Hammock

    </div>
        <div id="side">
        <ul>
                <li ><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/store">Store</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="http://hammock.silvernightfall.com/MouseOver.htm">Coming Soon</a></li>
                <li><a href="http://hammock.silvernightfall.com/FeedRead3.php"><img src="rss.png" alt="rss feed" /></a></li>
            </ul>

        </div>
        <div id="feed">
    <?php
$feed = simplexml_load_file('http://beaniebabiespriceguide.com/feed/');

foreach($feed->channel as $channel) {
	echo '<h3>' . htmlentities($channel->title) . '</h3>';
	echo '<p><a href="' . htmlentities($channel->link) . '">' . htmlentities($channel->link) . '</a></p>';
	echo '<ul>';
		foreach ($channel->item as $item) {
			echo '<li><a href="' . htmlentities($item->link) . '">';
			echo htmlentities($item->title) . '</a><br />';
			echo '<div class="date">' . htmlentities($item->pubDate) . '</div>' .'<br /></li>';
		}
		echo '</ul>';
	}

?>
 <div class="clearfooter"></div>
</div>
        <div class="footer">
            <ul>
                <li id="home"><a href="/login" class="footer">Home</a></li>
                <li id="about"><a href="/about" class="footer">About</a></li>
                <li id="store"><a href="/store" class="footer">Store</a></li>
                <li id="contact"><a href="/contact" class="footer">Contact</a></li>
                <li><a href="http://hammock.silvernightfall.com/MouseOver.htm">Coming Soon</a></li>
                 <li><a href="http://hammock.silvernightfall.com/FeedRead3.php">RSS</a></li>            
            </ul>
        </div>
        <div id="copyright">

            <script type="text/javascript">document.write('&copy;&nbsp;' +(new Date()).getFullYear() + '&nbsp;&nbsp;Victoria Bagnell');</script><noscript>&copy;&nbsp;Victoria Bagnell</noscript>
        </div>
</body>
</html>
		


