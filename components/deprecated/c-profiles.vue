<template>
	<div class="profiles component-padding component-border-horizontal" style="font-family: 'Jost', sans-serif;">
		<SectionTitle><b>Profile</b> społecznościowe</SectionTitle>
		<div class="ul" style="font-size: 20px;">
			<div class="social-link">
				<a
					target="_blank"
					rel="noopener noreferrer nofollow"
					href="https://linkedin.com/in/smulewicz"
				>
				<div
					class="social-image"
					:style="{ 'background-image': 'url(/uploads/linkedin.png)' }"
				></div>
				<div style="display: flex; flex-direction: column">
					<div>LinkedIn</div>
					<div style="font-size: 17px">Odwiedź mój profil zawodowy</div>
				</div>
				</a>
				<a
				target="_blank"
				rel="noopener noreferrer nofollow"
				href="https://github.com/necodeus"
				>
				<div
					class="social-image"
					:style="{ 'background-image': 'url(/uploads/github.png)' }"
				></div>
				<div style="display: flex; flex-direction: column">
					<div>GitHub</div>
					<div style="font-size: 17px">Stwórz coś ze mną</div>
				</div>
				</a>
				<a
				target="_blank"
				rel="noopener noreferrer nofollow"
				href="spotify:user:315k3ny42ukhcrvyocz7xxxc2wn4"
				>
				<div
					class="social-image"
					:style="{ 'background-image': 'url(/uploads/spotify.png)' }"
				></div>
				<div style="display: flex; flex-direction: column">
					<div>Spotify</div>
					<div style="font-size: 17px">Posłuchaj moich playlist</div>
				</div>
				</a>
			</div>
		</div>
	</div>
</template>

<style>
@media (max-width: 900px) {
	.profiles {
		height: auto;
	}
}
@media (max-width: 900px) {
	.profiles > div.ul {
		display: flex;
	}
}
@media (min-width: 600px) and (max-width: 900px) {
	.profiles > div.ul > div:not(:last-child) {
		margin-right: 30px;
	}
}
@media (max-width: 600px) {
	.profiles > div.ul {
		display: block;
	}
}
.profiles > div.ul > .social-link > a {
	display: flex;
	align-items: center;
	margin-left: -10px;
}
.profiles > div.ul > .social-link > a:not(:last-child) {
	margin-bottom: 30px;
}
.profiles > div.ul > .social-link > a > div {
	margin-left: 10px;
	word-wrap: anywhere;
}
.profiles > div.ul > .social-link > a .social-image {
	width: 60px;
	height: 60px;
	min-width: 60px;
	min-height: 60px;
	background-size: cover;
	background-position: center;
}
</style>
